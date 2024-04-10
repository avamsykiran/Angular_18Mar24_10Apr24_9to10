import { AbstractControl, ValidationErrors,ValidatorFn } from "@angular/forms";


export function maxAge(ageLimit: number) :ValidatorFn {
    return (
        (control: AbstractControl): ValidationErrors | null => {
            let today = new Date();
            let dob = new Date(control.value);

            let isAgeInvalid = (today.getFullYear() - dob.getFullYear()) < ageLimit;

            return isAgeInvalid ? { maxAge: true } : null;
        }
    );
}
