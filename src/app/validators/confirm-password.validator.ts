import { FormGroup } from '@angular/forms';

export const confirmPasswordvalidator = (
  controlName: string,
  controlNameToMatch: string
) => {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const controlTomatch = formGroup.controls[controlNameToMatch];

    if (
      controlTomatch.errors &&
      !controlTomatch.errors['confirmPasswordvalidator']
    ) {
      return;
    }
    if (control.value !== controlTomatch.value) {
      controlTomatch.setErrors({ confirmPasswordvalidator: true });
    } else {
      controlTomatch.setErrors(null);
    }
  };
};
