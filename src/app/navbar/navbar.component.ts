import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private auth: AuthService, private toastr: ToastrService) {}

  logout() {
    if (confirm('Are you sure you want to logout?')) {
      this.auth.logout();
      this.toastr.error('Logged out successfully!', 'Success');
    }
  }
}
