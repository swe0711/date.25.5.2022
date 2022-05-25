import {AbstractControl} from '@angular/forms';
    export function startdatevalidate(control:AbstractControl):{[key:string]:any}|null{
        const start=/^[1-31]+-[1-12]+-[2022-2050]{1-4}$/.test(control.value);
        return start ? null : {'startdate': {value: control.value}};
}
