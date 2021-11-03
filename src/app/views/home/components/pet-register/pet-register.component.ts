import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-pet-register',
  templateUrl: './pet-register.component.html',
  styleUrls: ['./pet-register.component.css'],
})
export class PetRegisterComponent implements OnInit {
  @Output() hidePetRegister = new EventEmitter();
  @Output() defaultBtn = new EventEmitter();

  nome = '';
  especie = '';
  raca = '';
  sexo = '';
  dataNascimento = '';
  descricao = '';

  // fileToUpload: File;
  url: string;

  constructor(private petService: PetService) {}

  ngOnInit(): void {}
  onBtnCancelPetRegister() {
    this.hidePetRegister.emit();
  }

  defaultBtnActive() {
    this.defaultBtn.emit();
  }

  petRegister(){
    let observable = this.petService.registerPet(this.nome, this.especie, this.raca, this.sexo, this.dataNascimento, this.descricao, this.url);

    observable.subscribe(
      {
        next: data => {
          console.log(data);
          this.hidePetRegister.emit();
          alert('Pet cadastrado com sucesso');
        },
        error: err => console.log(err)
      }
    )
  }

  // fileInput(files: FileList){

  //   this.fileToUpload = files.item(0);
    
  // }
  onFileChanges(files){
    console.log("Imagem recebida: ", files);
    this.url = files[0].base64;
    console.log(this.url);
  }

}
