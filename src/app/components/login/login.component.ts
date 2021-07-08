import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string
  password:string
  

  constructor(private authService:AuthService, private fb:FormBuilder) { }

  ngOnInit() {
    
  }
   signIn() {
    this.authService.SignIn(this.email, this.password);
    this.email = '';
    this.password = '';
    }
  
  connectWithGoogle(){
    this.authService.loginWithGoogle()
  }
}
