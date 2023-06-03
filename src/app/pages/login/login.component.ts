import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { LoginRequest } from '../../models/login.model';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error: string = "";
  errorClass: string = "";
  isLoading: boolean = false;
  loadingState: 'start' | 'middle' | 'end' = 'start';

  constructor(private loginService: LoginService, private router: Router){}


  onSubmit(form : NgForm){
    const formData = form.value;
    console.log(formData);

    this.loginAction(formData);
  }

  loginAction(loginData : LoginRequest){
    this.isLoading = true;
    this.loadingState = 'middle';
    this.loginService.login(loginData).subscribe({
      next: (responseData) => {
        console.log(responseData);
        this.loadingState = 'end';
        this.isLoading = false;
        if (responseData.role == "USER") {
          console.log("User logged in");
          this.router.navigate(['/']);}
      },
      error: (err) => {
        this.loadingState = 'end';
        this.error = err.error.message;
        console.log(err);
        this.errorClass = "alert";
      }
    });
  }

}
