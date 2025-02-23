import { Component } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  name = "";
  email = "";
  password = "";

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register({ name: this.name, email: this.email, password: this.password }).subscribe(
      () => {
        alert("Registration successful!");
        this.router.navigate(["/login"]);
      },
      (err) => alert(err.error.msg)
    );
  }


}
