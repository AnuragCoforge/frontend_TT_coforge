import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

  username = '';
  password = '';

  constructor(private router: Router) {} //always inject router as a constructor

  login() {
    if (this.username === 'Anurag' && this.password === 'Anurag@1234') {
      this.router.navigate(['/home']);
    }
  }
}