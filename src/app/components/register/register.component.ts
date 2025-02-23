// import { Component } from '@angular/core';
// import { AuthService } from "../../services/auth.service";
// import { Router } from "@angular/router";

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [],
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.scss'
// })
// export class RegisterComponent {
//   name = "";
//   email = "";
//   password = "";

//   constructor(private authService: AuthService, private router: Router) {}

//   register() {
//     this.authService.register({ name: this.name, email: this.email, password: this.password }).subscribe(
//       () => {
//         alert("Registration successful!");
//         this.router.navigate(["/login"]);
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
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerData = { name: '', email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onRegister(): void {
    this.authService.register(this.registerData).subscribe({
      next: (response) => {
        alert('Registration Successful! Please login.');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        alert('Registration Failed: ' + err.error.message);
      }
    });
  }
}
