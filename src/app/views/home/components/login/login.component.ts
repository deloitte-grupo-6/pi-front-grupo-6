import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { NavBarComponent } from 'src/app/shared/nav-bar/nav-bar.component';

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

    observable.subscribe({
      next: (response) => {
        const token = response.headers.get('Authorization');
        console.log(token);
        window.sessionStorage.setItem('token', token);
        this.hideLogin.emit();
        NavBarComponent.showPetButton.emit();
      },
      error: (err) => {
        this.showError = true;
      },
    });

    // observable.subscribe(
    //   {
    //     next: data => {
    //       console.log(data);
    //       window.sessionStorage.setItem("token", (<{token:string}>data).token);
    //       this.hideLogin.emit();
    //     },
    //     error: err => {
    //       this.showError = true;
    //     }
    //   }
    // )

    // observable.subscribe(response => {
    //   // const keys = response.headers.keys();
    //   // const headers = keys.map(key =>
    //     // `${key}: ${response.headers.get(key)}`);
    //     const header = response.headers.keys();

    //    console.table(header);
    // })

    // observable.subscribe(response => {
    //   console.log(response.headers.get('Authorization'));
    // })
  }

  // onSubmitLogin() {
  //   console.log(this.loginForm.value);
  //   this.loginForm.reset();
  // }

  get emailaddress() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('senha');
  }

  onBtnCancelLogin() {
    this.hideLogin.emit();
    NavBarComponent.showPetButton.emit();
    NavBarComponent.showMyPageModal.emit();
  }
}
