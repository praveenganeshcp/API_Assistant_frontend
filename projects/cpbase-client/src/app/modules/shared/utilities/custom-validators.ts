import { FormControl, ValidationErrors } from "@angular/forms";

export class CustomValidator {
    static strongPassword(control: FormControl): ValidationErrors | null {
        let value: string = control.value;
        let caps = 0, small = 0, numerical = 0;
        if(value == '') {
            return null;
        }
        for(let i=0;i<value.length;i++) {
            let ascii = value.charCodeAt(i);
            if(ascii >=48 && ascii <= 57) {
                ++numerical;
            }
            else if(ascii >=65 && ascii <= 90) {
                ++caps;
            }
            else if(ascii >=97 && ascii <= 122) {
                ++small;
            }
        }
        return (numerical >=3 && caps >= 3 && small >= 3) ? null : {weakPassword: value};
    }
}