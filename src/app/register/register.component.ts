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

  check() : boolean{

    if(document.getElementById('password') === document.getElementById('repeatPassword')){
      return true
    }
    else return false;

    /*
    this.password = pwd;
    this.repeatPassword = rep_pwd;
    if(this.password === this.repeatPassword){
      return true;
    }
    return false;
    */

  }
}
