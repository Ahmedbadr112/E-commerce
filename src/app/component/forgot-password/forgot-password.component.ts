import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../core/servcies/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent {
  isLoading: boolean = false;
  step: number = 1;
  private readonly _AuthService = inject(AuthService);
  private readonly _Router = inject(Router);
  verifyEmail: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });
  verifycode: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\w{6}$/),
    ]),
  });
  resetPassword: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });
  verifyEmailSubmit(): void {
    const emailValue = this.verifyEmail.get('email')?.value;
    this.resetPassword.get('email')?.patchValue(emailValue);
  
    this._AuthService.setEmailVerify(this.verifyEmail.value).subscribe({
      next: (res) => {
        this.isLoading = false;
        if (res.statusMsg === 'success') {
          this.step = 2;
        } else {
          // Handle non-success status
          console.error('Failed to verify email:', res.message);
        }
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Error verifying email:', err);
      },
    });
  }
  
  sentCode(): void {
    this._AuthService.setCodeVerify(this.verifycode.value).subscribe({
      next: (res) => {
        this.isLoading = false;
        if (res.status === 'Success') {
          this.step = 3;
        } else {
          // Handle non-success status
          console.error('Failed to verify code:', res.message);
        }
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Error verifying code:', err);
      },
    });
  }
  
  resetPasswordSubmit(): void {
    this._AuthService.resetPasswordVerify(this.resetPassword.value).subscribe({
      next: (res) => {
        this.isLoading = false;
        if (res.status === 'Success') {
          localStorage.setItem('userToken', res.token);
          this._AuthService.saveUserData();
          this._Router.navigate(['/home']);
        } else {
          // Handle non-success status
          console.error('Failed to reset password:', res.message);
        }
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Error resetting password:', err);
      },
    });
  }
  
}
