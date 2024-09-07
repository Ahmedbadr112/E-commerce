import { routes } from './../../app.routes';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../../core/servcies/auth.service';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { log } from 'node:console';
import { of, Subscription } from 'rxjs';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnDestroy {
  url: string = '/login';
  msgErr: string = '';
  isLoading: boolean = false;
  private readonly _AuthService = inject(AuthService);
  private readonly _FormBuilder = inject(FormBuilder);
  registerSubscription!: Subscription;
  registerForm: FormGroup = this._FormBuilder.group(
    {
      name: this._FormBuilder.control(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      email: this._FormBuilder.control(null, [
        Validators.required,
        Validators.email,
      ]),
      password: this._FormBuilder.control(null, [
        Validators.required,
        Validators.pattern(/^\w{6,}$/),
      ]),
      rePassword: this._FormBuilder.control(null, [
        Validators.required,
        Validators.pattern(/^01[0125][0-9]{8}$/),
      ]),
      phone: this._FormBuilder.control(null, [
        Validators.required,
        Validators.pattern(/^01[0125][0-9]{8}$/),
      ]),
    },
    this.confirmPassword
  );
  loginSubmit: any;
  private Router: Router = inject(Router);

  registerSubmit(): void {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.registerSubscription = this._AuthService
        .setRegisterForm(this.registerForm.value)
        .subscribe({
          next: (res) => {
            this.Router.navigate([this.url]);
            console.log(res);
            this.isLoading = false;
          },
          error: (err: HttpErrorResponse) => {
            this.msgErr = err.error.message;
            console.log(err);
            this.isLoading = false;
          },
        });
    } else {
      this.registerForm.setErrors({ mismatch: true });
      this.registerForm.markAllAsTouched();
    }
  }
  ngOnDestroy(): void {
    this.registerSubscription?.unsubscribe();
  }
  confirmPassword(g: AbstractControl) {
    if (g.get('password')?.value === g.get('rePassword')?.value) {
      return null;
    } else {
      return { mismatch: true };
    }
  }
}
