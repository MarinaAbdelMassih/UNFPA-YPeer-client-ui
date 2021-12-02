import {AbstractControl, ValidationErrors} from '@angular/forms';

export class NameValidator {
  static noWhiteSpace(control: AbstractControl): ValidationErrors | null {
    if (control.value && (control.value as string).indexOf(' ') >= 0) {
      return {noWhiteSpace: true};
    }
    return null;
  }
}
