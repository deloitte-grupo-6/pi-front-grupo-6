import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { NavBarComponent } from 'src/app/shared/nav-bar/nav-bar.component';
import { stringify } from '@angular/compiler/src/util';

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
  loginForm: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(6),
          Validators.maxLength(50),
        ],
      ],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmitLogin() {
    console.log('Realizando Login');
    console.log(this.email + ' ' + this.senha);

    let observable = this.userService.loginUser(this.email, this.senha);
    observable.subscribe(
      (data) => {
        console.log(data);
        window.sessionStorage.setItem('id', (<{ id: string }>data).id);
        window.sessionStorage.setItem('email', (<{ email: string }>data).email);
        window.sessionStorage.setItem('token', (<{ token: string }>data).token);
        this.hideLogin.emit();
        NavBarComponent.showPetButton.emit();
        NavBarComponent.showMyPageModal.emit();
        NavBarComponent.hideRegisterButton.emit();
      },
      (error) => console.log(error)
    );
  }

  get emailaddress() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('senha');
  }

  onBtnCancelLogin() {
    this.hideLogin.emit();
  }

  showRegisterFromLogin() {
    this.hideLogin.emit();
    NavBarComponent.showRegisterModal.emit();
  }
}
