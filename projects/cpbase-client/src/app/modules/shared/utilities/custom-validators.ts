import { FormControl, FormGroup, ValidationErrors } from "@angular/forms";

export class CustomValidator {
    static strongPassword(control: FormControl): ValidationErrors | null {
        let value: string = control.value;
        let caps = 0, small = 0, numerical = 0, special = 0;
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
            else if((ascii >= 33 && ascii <= 47) || (ascii >= 58 && ascii <= 64)) {
                ++special;
            }
        }
        return (numerical >=1 && special >= 1 && caps >= 1 && small >= 1) ? null : {weakPassword: value};
    }

    static passwordMatch(passwordForm: FormGroup): ValidationErrors| null {
        let value = passwordForm.value;
        let { newPassword, newConfirmPassword } = value;
        let result = newPassword == newConfirmPassword ? null : {passwordsDoNotMatch: newPassword};
        return result;
    }
}