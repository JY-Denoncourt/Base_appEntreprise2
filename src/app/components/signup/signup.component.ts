import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCredentials } from 'src/app/models/user-credentials.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  uniqueEmailError: string | null = null;


  constructor(private authService: AuthService, private router: Router) {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email] ),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      passwordConf: new FormControl('', [Validators.required, Validators.minLength(3)]),
    }, this.passwordcheck);
  }


  private passwordcheck(formCheck: AbstractControl): ValidationErrors | null {
    if ( (formCheck.value?.password != formCheck.value?.passwordConf))  { 
      return {passwordOk : true}; 
    }
    else {
      return null
    };
  }

  
  ngOnInit(): void {
  }


  signUp() {
    console.log(this.signupForm.value);
    console.log(this.signupForm.valid);

    if (this.authService.signUp(new UserCredentials(this.signupForm.value))) {
      this.router.navigate(['/recipes']);
    } else {
      this.setUniqueEmailError(true);
    }
  }


  onEmailInput() {
    if (this.uniqueEmailError) {
      this.setUniqueEmailError(false);

      this.signupForm.get('email')?.updateValueAndValidity();
    }
  }


  private setUniqueEmailError(isUsed: boolean) {
    this.uniqueEmailError = isUsed ? 'This email is already used!' : null;
    this.signupForm.get('email')?.setErrors(isUsed ? { emailNotUnique: true } : null);
  }

}
