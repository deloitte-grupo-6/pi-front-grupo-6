import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Pet } from '../../interfaces/pet';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { PetService } from '../../services/pet.service';
@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css'],
})
export class MyPageComponent implements OnInit {
  @Input() petById: Pet;
  public show: boolean = false;
  public show2: boolean = false;
  public show3: boolean = false;

  registerForm: FormGroup;

  nome = '';
  email = '';
  contato = '';
  documento = '';
  cidade = '';
  senha = '';

  private user: User;
  private petsEmDoacao: Pet[];
  petsInteressados: Pet[];
  private id: number;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private petService: PetService
  ) {}

  ngOnInit(): void {
    this.id = parseInt(window.sessionStorage.getItem('id'));
    console.log(this.id);
    this.userService.getUserById(this.id).subscribe({
      next: (data) => {
        this.user = data;
        this.petsEmDoacao = data.petsEmDoacao;
        this.petsInteressados = data.petsInteressados;
        console.log(data);
      },
      error: (err) => console.log(err),
    });

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

  toggle() {
    this.show = !this.show;
    this.show2 = false;
    this.show3 = false;
  }

  toggle2() {
    this.show2 = !this.show2;
    this.show = false;
    this.show3 = false;
  }

  toggle3() {
    this.show3 = !this.show3;
    this.show = false;
    this.show2 = false;
  }

  userUpdate() {
    let observable = this.userService.updateUser(
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
        this.show = !this.show;
        alert('Usuário atualizado com sucesso');
      },
      error: (err) => console.log(err),
    });
  }
}
