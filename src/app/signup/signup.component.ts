import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  
  constructor(private auth: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {}

  registerForm(user: any) {
    this.auth.register(user).subscribe(
      (res) => {
        console.log("Register Successfully From Angular", res);
        this.toastr.success('Registration successful!', 'Success');
      },
      (error) => {
        console.error("Registration failed", error);
        this.toastr.error('Failed to register. Please try again.', 'Error');
      }
    );
  }
}
