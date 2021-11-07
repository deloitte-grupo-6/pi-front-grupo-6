import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  NgModel,
  Validators,
} from '@angular/forms';
import * as moment from 'moment';
import { Pet } from '../../interfaces/pet';
import { User } from '../../interfaces/user';
import { PetService } from '../../services/pet.service';
import { UserService } from '../../services/user.service';

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
  public show4: boolean = false;

  registerForm: FormGroup;

  // nome = '';
  // email = '';
  // contato = '';
  // documento = '';
  // cidade = '';
  senha = '';

  private user: User;
  // PEGAR PELOS ENDPOINTS
  private petsEmDoacao: Pet[];
  private petEdit: Pet;
  private petsInteressados: Pet[];
  private id: number;
  private url: string;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private petService: PetService
  ) {}

  ngOnInit(): void {
    this.id = parseInt(window.sessionStorage.getItem('id'));
    console.log(this.id);

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
      nomePet: ['', [Validators.required, Validators.maxLength(50)]],
      raca: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      especie: ['', Validators.required],
      sexo: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      // imagemUrl: ['', Validators.required],
      descricao: [Validators.maxLength(500)],
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
  get namePet() {
    return this.registerForm.get('nomePet');
  }
  get breed() {
    return this.registerForm.get('raca');
  }
  get specie() {
    return this.registerForm.get('especie');
  }
  get gender() {
    return this.registerForm.get('sexo');
  }
  get birthdate() {
    return this.registerForm.get('dataNascimento');
  }
  get image() {
    return this.registerForm.get('imagemUrl');
  }
  get description() {
    return this.registerForm.get('descricao');
  }

  toggle() {
    this.show = !this.show;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;

    this.userService.getUserById(this.id).subscribe({
      next: (data) => {
        this.user = data;
        console.log(data);
      },
      error: (err) => console.log(err),
    });
  }

  toggle2() {
    this.show2 = !this.show2;
    this.show = false;
    this.show3 = false;
    this.show4 = false;

    this.userService.getPetsDoacao(this.id).subscribe({
      next: (data) => {
        this.petsEmDoacao = data;
      },
      error: (err) => console.log(err),
    });
  }

  toggle3() {
    this.show3 = !this.show3;
    this.show = false;
    this.show2 = false;
    this.show4 = false;

    this.userService.getPetsInteressados(this.id).subscribe({
      next: (data) => {
        this.petsInteressados = data;
      },
      error: (err) => console.log(err),
    });
  }

  userUpdate() {
    let observable = this.userService.updateUser(
      this.id,
      this.user.nome,
      this.user.email,
      this.user.contato,
      this.user.documento,
      this.user.cidade,
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

  deletePet(idPet: number) {
    let observable = this.petService.deletePetById(idPet);
    observable.subscribe({
      next: (data) => {
        alert('O cadastro do Pet foi excluído');
      },
      error: (err) => console.log(err),
    });
  }

  donatePet(idPet: number) {
    let observable = this.petService.donatePetById(idPet);
    observable.subscribe({
      next: (data) => {
        console.log(data);
        alert('Parabéns! Seu Pet foi doado!');
      },
      error: (err) => console.log(err),
    });
  }

  editPet(idPet: number) {
    this.show3 = false;
    this.show = false;
    this.show2 = false;
    this.show4 = true;

    let observable = this.petService.getPetById(idPet);

    observable.subscribe({
      next: (data) => {
        console.log(data);
        this.petEdit = data;
        this.url = data.imagemUrl;
      },
    });
  }

  onBtnCancelPetRegister() {
    this.show4 = false;
    this.show2 = true;
  }

  petUpdate() {
    let observable = this.petService.updatePet(
      parseInt(this.petEdit.id),
      this.petEdit.nome,
      this.petEdit.especie,
      this.petEdit.raca,
      this.petEdit.sexo,
      this.petEdit.dataNascimento,
      this.petEdit.descricao,
      this.url
    );

    observable.subscribe({
      next: (data) => {
        console.log(data);
        this.show4 = false;
        alert('Seu Pet foi atualizado com sucesso');
      },
      error: (err) => console.log(err),
    });
  }

  onFileChanges(files) {
    console.log('Imagem recebida: ', files);
    this.url = files[0].base64;
    console.log(this.url);
  }

  public idadePetPelaDataDeNascimento(dataNascimento: Date): String {
    let year = moment().diff(dataNascimento, 'years', true);
    let ano = Math.floor(year);
    let month = moment().diff(dataNascimento, 'months', true) - ano * 12;
    let mes = Math.floor(month);
    if (ano == 0) {
      if (mes == 1) {
        return mes + ' mês';
      }
      return mes + ' meses';
    } else if (mes == 0) {
      if (ano == 1) {
        return ano + ' ano';
      } else if (ano == 0) {
        return 'Recém nascido';
      }
      return ano + ' anos';
    }

    if (ano == 1 && mes == 1) {
      return ano + ' ano e ' + mes + ' mês';
    } else if (ano == 1) {
      return ano + ' ano e ' + mes + ' meses';
    } else if (mes == 1) {
      return ano + ' anos e ' + mes + ' mês';
    }
    return ano + ' anos e ' + mes + ' meses';
  }
}
