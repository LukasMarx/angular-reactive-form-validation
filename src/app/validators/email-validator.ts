import { AbstractControl } from '@angular/forms';

export function emailValidator(control: AbstractControl): { [key: string]: any } | null {
  // this regex is not complete. Don't use in production!
  const valid = /.+\@.+\..+/.test(control.value);
  return valid ? null : { invalidEmail: { valid: false, value: control.value } };
}
