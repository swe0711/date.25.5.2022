import { AbstractControl } from '@angular/forms';
export function enddatevalidate(control: AbstractControl): { [key: string]: any } | null {
    const end = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(control.value);
    return end ? null : { 'enddate': { value: control.value } };
}
