import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private userService: UserService, private formBuilder: FormBuilder) {}

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

  onSubmitLogin(){
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
  }
}
