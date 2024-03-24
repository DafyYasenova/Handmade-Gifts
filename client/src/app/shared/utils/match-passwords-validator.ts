import { ValidatorFn } from "@angular/forms";

export function matchPasswordsValidator(passwordControlName: string, rePassControlName: string): ValidatorFn {
    return (control) => {

        const passwordControl = control.get(passwordControlName);
        const rePasswordControl = control.get(rePassControlName);

        const isMatch = passwordControl?.value == rePasswordControl?.value;


        console.log({ isMatch })
        return isMatch ? null : { matchPasswordsValidator: true };
    }
}