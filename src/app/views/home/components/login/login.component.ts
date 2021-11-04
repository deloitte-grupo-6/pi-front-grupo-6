import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Output() hideLogin = new EventEmitter();

  email = '';
  senha = '';
  showError: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSubmitLogin(form){
    console.log("Realizando Login");
    let observable = this.userService.loginUser(this.email, this.senha);

    observable.subscribe(
      {
        next: data => {
          // window.sessionStorage.setItem("token", (<{token:string}>data).token);
          console.log(data);
          this.hideLogin.emit();
        },
        error: err => {
          this.showError = true;
        }
      }
    )
  }

  onBtnCancelLogin() {
    this.hideLogin.emit();
  }
}
