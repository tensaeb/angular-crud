import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loginForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _authService: AuthServiceService,
    private _coreService: CoreService,
    private router: Router
  ) {
    this.loginForm = this._fb.group({
      email: '',
      password: ['', Validators.required],
    });
  }

  onFormSubmit() {
    this._authService.login(this.loginForm.value).subscribe({
      next: (val: any) => {
        if (
          val.email === this.loginForm.value.email &&
          val.password === this.loginForm.value.password
        ) {
          this.handleSuccessfulLogin();
        } else {
          this.handleFailedLogin();
        }
      },
      error: (err) => this.handleError(err),
    });
  }

  private handleSuccessfulLogin() {
    this._coreService.openSnackBar('Login Successful', 'Done');
    this.loginForm.reset();
    this.router.navigate(['home']);
  }

  private handleFailedLogin() {
    // Handle the case where the user is not found or login failed
    this._coreService.openSnackBar('Invalid email or password', 'Error');
  }

  private handleError(err: any) {
    console.log(err);
    // Handle the error in a user-friendly way, e.g., displaying an error message.
  }
}
