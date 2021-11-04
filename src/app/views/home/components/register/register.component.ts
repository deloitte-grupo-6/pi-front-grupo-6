import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() hideRegister = new EventEmitter();
  @Output() redirectLogin = new EventEmitter();

  registerForm: FormGroup;

  nome = '';
  email = '';
  contato = '';
  documento = '';
  cidade = '';
  senha = '';
  // checkValid: AsyncValidatorFn | AsyncValidatorFn[];
  // checkValid(control: AbstractControl) {
  //   return new Promise((resolve, reject) => {
  //     resolve(true);
  //   });
  // }

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nome: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(6),
          Validators.maxLength(50),
        ],
        // this.checkValid
      ],
      contato: [
        '',
        [
          Validators.required,
          Validators.minLength(12),
          Validators.maxLength(14),
        ],
        // this.checkValid
      ],
      documento: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(14),
        ],
        // this.checkValid
      ],
      cidade: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
        // this.checkValid
      ],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmitRegister() {
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }

  get name() {
    return this.registerForm.get('nome');
  }
  get emailaddress() {
    return this.registerForm.get('email');
  }
  get contact() {
    return this.registerForm.get('contato');
  }
  get document() {
    return this.registerForm.get('documento');
  }
  get city() {
    return this.registerForm.get('cidade');
  }
  get senhadois() {
    return this.registerForm.get('senha');
  }

  onBtnCancelRegister() {
    this.hideRegister.emit();
  }

  userRegister() {
    let observable = this.userService.registerUser(
      this.nome,
      this.email,
      this.contato,
      this.documento,
      this.cidade,
      this.senha
    );

    observable.subscribe({
      next: (data) => {
        console.log(data);
        // window.sessionStorage.setItem("token", (<response>data).token);
        this.hideRegister.emit();
        this.redirectLogin.emit();
        alert('Usuário cadastrado com sucesso');
      },
      error: (err) => console.log(err),
    });
  }
}
