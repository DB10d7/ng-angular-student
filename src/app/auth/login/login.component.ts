import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';
import { LoginPayload } from '../login-payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any= FormGroup;
  loginPayload:any= LoginPayload;
  constructor(private formBuilder:FormBuilder, private authService: AuthService, private router:Router) {

    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
    this.loginPayload = {
      username: '',
      password: ''
    };
   }

  
  ngOnInit(): void {
  }

  onSubmit(){
    this.loginPayload.username = this.loginForm.get('username').value;
    this.loginPayload.password = this.loginForm.get('password').value;

    this.authService.login(this.loginPayload).subscribe(data => {
      if (data) {
        console.log('login success');
        this.router.navigateByUrl('/add-student');
      } else {
        console.log('Login failed');
      }
    });

  }

}
