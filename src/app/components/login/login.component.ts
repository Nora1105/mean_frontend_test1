// import { Component } from '@angular/core';
// import { AuthService } from "../../services/auth.service";
// import { Router } from "@angular/router";
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.scss'
// })
// export class LoginComponent {

//   email = "";
//   password = "";

//   constructor(private authService: AuthService, private router: Router) {}

//   login() {
//     this.authService.login({ email: this.email, password: this.password }).subscribe(
//       (res) => {
//         localStorage.setItem("token", res.token);
//         this.router.navigate(["/dashboard"]);
//       },
//       (err) => alert(err.error.msg)
//     );
//   }
// }

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.loginData).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        alert('Login Successful!');
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        alert('Login Failed: ' + err.error.message);
      }
    });
  }
}
