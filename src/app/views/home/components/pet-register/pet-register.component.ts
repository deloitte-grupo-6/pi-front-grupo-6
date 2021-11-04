import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pet-register',
  templateUrl: './pet-register.component.html',
  styleUrls: ['./pet-register.component.css'],
})
export class PetRegisterComponent implements OnInit {
  @Output() hidePetRegister = new EventEmitter();
  @Output() defaultBtn = new EventEmitter();

  registerForm: FormGroup;

  nome = '';
  especie = '';
  raca = '';
  sexo = '';
  dataNascimento = '';
  descricao = '';

  // fileToUpload: File;
  url: string;

  constructor(
    private petService: PetService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.maxLength(50)]],
      raca: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z]*'),
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      especie: ['', Validators.required],
      sexo: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      imagemUrl: ['', Validators.required],
      descricao: [Validators.maxLength(500)],
    });
  }

  onSubmitRegister() {
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }

  get name() {
    return this.registerForm.get('nome');
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

  onBtnCancelPetRegister() {
    this.hidePetRegister.emit();
  }

  defaultBtnActive() {
    this.defaultBtn.emit();
  }

  petRegister() {
    let observable = this.petService.registerPet(
      this.nome,
      this.especie,
      this.raca,
      this.sexo,
      this.dataNascimento,
      this.descricao,
      this.url
    );

    observable.subscribe({
      next: (data) => {
        console.log(data);
        this.hidePetRegister.emit();
        alert('Pet cadastrado com sucesso');
      },
      error: (err) => console.log(err),
    });
  }

  // fileInput(files: FileList){

  //   this.fileToUpload = files.item(0);

  // }
  onFileChanges(files) {
    console.log('Imagem recebida: ', files);
    this.url = files[0].base64;
    console.log(this.url);
  }
}
