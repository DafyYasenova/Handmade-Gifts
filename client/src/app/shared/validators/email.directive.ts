import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmail]', 
  providers: [
    {
      provide:NG_VALIDATORS,
      useExisting: EmailDirective,
      multi: true,
    }
  ]
})
export class EmailDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    
  }

}
