import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Subscription, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  public searchResult: string;
  public searchSubscription: Subscription;
  public searchBox$: BehaviorSubject<string> = new BehaviorSubject('');
  public clear: boolean = false;

  constructor() { }

  ngOnInit() {
    this.searchSubscription = this.searchBox$.pipe(
      distinctUntilChanged(),
      //filter(text => text.length > 2),
      debounceTime(100))
      .subscribe((text: string) => {
        this.search.emit(text);
      });
  }

  searchChange(searchResult: string) {
    if(searchResult.length > 2) {
      this.clear = true;
      this.searchBox$.next(searchResult);
    }
  }

  clearSearch() {
    this.searchResult = '';
    this.clear = false;
    this.searchBox$.next('');
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }
}
