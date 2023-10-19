import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthServiceService,
    private _coreService: CoreService,
    private router: Router
  ) {
    this.signUpForm = this._fb.group({
      name: '',
      email: '',
      password: '',
    });
  }

  ngOnInit(): void {}

  onFormSubmit() {
    this._authService.register(this.signUpForm.value).subscribe({
      next: (val: any) => {
        this._coreService.openSnackBar('Registered Successfully', 'Done');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
