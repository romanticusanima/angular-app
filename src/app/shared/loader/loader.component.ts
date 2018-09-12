import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})

export class LoaderComponent implements OnInit {
  public showLoader: boolean;
  public loaderSubscription: Subscription;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.loaderSubscription = this.loaderService.status$.subscribe((state: boolean) => {
      this.showLoader = state;
    });
  }

  ngOnDestroy() {
    this.loaderSubscription.unsubscribe();
  }
}
