import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    }  
  ]
})
export class CustomInputComponent implements ControlValueAccessor {
  
  private value: string = '';
  private parseError: boolean;
  private data: any;

  // the method set in registerOnChange, it is just 
  // a placeholder for a method that takes one parameter, 
  // we use it to emit changes back to the form
  private propagateChange = (_: any) => { };
  // this is the initial value set to the component
  public writeValue(obj: any) {
      if (obj) {
          this.data = obj;
          this.value = this.data; 
      }
  }
  // registers 'fn' that will be fired when changes are made
  // this is how we emit the changes back to the form
  public registerOnChange(fn: any) {
      this.propagateChange = fn;
  }
  // not used, used for touch input
  public registerOnTouched() { }

  // change events from the textarea
  private onChange(event) {
      // get value from text area
      let newValue = event.target.value;
      try {
          this.data = newValue;
          this.parseError = false;
      } catch (ex) {
          // set parse error if it fails
          this.parseError = true;
      }
      // update the form
      this.propagateChange(this.data);
  }

  public validate(c: FormControl) {
    return (!this.parseError) ? null : {
        parseError: {
            valid: false,
        },
    };
  }

}
