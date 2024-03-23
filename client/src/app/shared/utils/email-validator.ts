import { ValidatorFn } from "@angular/forms";


export function emailValidator(domains: string[]): ValidatorFn {

    const domainString = domains.join('|');
    const regExp = new RegExp(`^[A-Za-z0-9]{4,}@(gmail|abv)\.(${domainString})$`);

    return (control) => {

        const isEmailinvalid = control.value === '' || regExp.test(control.value);

        return isEmailinvalid ? null : { emailValidator: true };
    }
}