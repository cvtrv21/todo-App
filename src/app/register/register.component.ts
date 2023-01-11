import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public name: string = '';
  public surname: string = '';
  public email: string = '';
  public password: string = '';
  public repeatPassword: string = '';

  public submitted = false;

  handleLogin(f: NgForm) {
    if (f.invalid) {
      return;
    } else {
      console.log(
        this.name,
        this.surname,
        this.email,
        this.password,
        this.repeatPassword
      );
    }
  }

  onSubmit() {
    this.submitted = true;
  }
}
