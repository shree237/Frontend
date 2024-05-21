import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {}

  loginForm(user: any) {
    this.auth.login(user).subscribe(
      (res) => {
        console.log("Login Successfully From Angular", res);
        this.auth.setToken(res.token);
        this.router.navigate(['/dashboard']);
        this.toastr.success('Login successful!', 'Success');
      },
      (error) => {
        console.error("Login failed", error);
        this.toastr.error('Failed to login. Please check your credentials.', 'Error');
      }
    );
  }
}
