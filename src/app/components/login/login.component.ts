import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  authError: string | null = null;
  loginForm: FormGroup;
  passwordControl: FormControl

  constructor(private authService: AuthService, private router: Router) {
    
    this.passwordControl = new FormControl(null, [Validators.required, Validators.minLength(3)]);
    
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email] ),
      password: new FormControl('', [Validators.required, Validators.minLength(3)/*, this.passwordMaxLength*/])  
    }, this.passwordMaxLength);
  }


  
  private passwordMaxLength(formCheck: AbstractControl): ValidationErrors | null {
    if (formCheck.value.password.length > 10) { return {maxLengthPassword : true} }
    else { return null }
  }


  ngOnInit(): void {
  }

  
  logIn() {
    //console.log(this.loginForm.controls.email.value);
    console.log(this.loginForm.value);
    //console.log(this.loginForm.value.email);
    console.log(this.loginForm.valid);
   

    if (this.authService.logIn(this.loginForm.value)) {
      this.router.navigate(['/recipes']);
    } else {
      this.authError = "Invalid credentials!";
    }
  }

}
