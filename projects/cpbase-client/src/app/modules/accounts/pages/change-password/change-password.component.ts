import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomValidator } from '../../../shared/utilities/custom-validators';
import { AccountServiceService } from '../../services/account-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

	changePasswordForm: FormGroup;
	constructor(private formBuilder: FormBuilder, private toastrService: ToastrService, private accountService: AccountServiceService) { 
		this.changePasswordForm = this.formBuilder.group({
			oldPassword: this.formBuilder.control('', [Validators.required, CustomValidator.strongPassword]),
			newPassword: this.formBuilder.control('', [Validators.required, CustomValidator.strongPassword]),
			newConfirmPassword: this.formBuilder.control('', [Validators.required, CustomValidator.strongPassword]),
		}, { validators: [CustomValidator.passwordMatch] })
	}

	get oldPswdControl() {
		return this.changePasswordForm.get('oldPassword');
	}

	get newPswdControl() {
		return this.changePasswordForm.get('newPassword');
	}

	get newConfirmPswdControl() {
		return this.changePasswordForm.get('newConfirmPassword');
	}

	ngOnInit(): void {

	}

	submitData() {
		this.changePasswordForm.markAllAsTouched();
		if(this.changePasswordForm.invalid) {
			this.toastrService.error('Fill valid details', 'Warning');
		}
		else {
			let formValue = this.changePasswordForm.value;
			let { oldPassword, newPassword } = formValue;
			let reqObj = {
				oldPassword, newPassword
			}
			this.accountService.changePassword(reqObj).subscribe(
				(response) => {
					this.toastrService.info(response);
				},
				err => {
					this.toastrService.error('Error in changing password');
				}
			)
		}
	}
}
