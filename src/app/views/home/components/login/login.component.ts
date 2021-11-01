import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Output() hideLogin = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmitLogin(form){
    console.log(form);
  }

  onBtnCancelLogin() {
    this.hideLogin.emit();
  }
}
