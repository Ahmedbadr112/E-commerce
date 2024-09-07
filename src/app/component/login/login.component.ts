import { Router, RouterLink } from '@angular/router';
import { Component, inject, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../core/servcies/auth.service';
import { NgClass } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnDestroy {
  private Router: Router = inject(Router);
  private readonly _AuthService = inject(AuthService);
  private readonly _FormBuilder = inject(FormBuilder);
  msgErr: string = '';
  isLoading: boolean = false;
  loginSubscription!: Subscription;

  loginForm: FormGroup = this._FormBuilder.group({
    email: this._FormBuilder.control(null, [
      Validators.required,
      Validators.email,
    ]),
    password: this._FormBuilder.control(null, [Validators.required]),
  });
  loginSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.loginSubscription = this._AuthService
        .setLoginForm(this.loginForm.value)
        .subscribe({
          next: (res) => {
            setTimeout(() => {
              localStorage.setItem('userToken', res.token);
              this._AuthService.saveUserData();
              this.Router.navigate(['/home']);
            }, 1000);
            console.log(res);
            console.log('login submit');
            this.isLoading = false;
          },
          error: (err: HttpErrorResponse) => {
            this.msgErr = err.error.message;
            console.log(err);
            this.isLoading = false;
          },
        });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe();
  }
}
