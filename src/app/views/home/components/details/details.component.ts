import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../../interfaces/pet';
import { PetService } from '../../services/pet.service';
import * as moment from 'moment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @Output() petById: Pet;

  booleanAdoptModal: boolean = false;
  booleanPetRegister: boolean = false;
  booleanRegister: boolean = false;
  booleanLogin: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petService: PetService
  ) {}

  id: number;
  petParaIdade: Pet;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = Number.parseInt(params['id']);
    });

    this.petService.getPetById(this.id).subscribe({
      next: (pet) => {
        this.petById = pet;
        this.petParaIdade = pet;
        console.log(pet);
      },
      error: (err) => console.error(err),
    });
  }

  modalAdopt() {
    this.booleanAdoptModal = true;
  }

  cancelAdoptModal() {
    this.booleanAdoptModal = false;
  }

  modalPetRegister() {
    this.booleanPetRegister = true;
  }

  cancelModalPetRegister() {
    this.booleanPetRegister = false;
  }

  modalRegister() {
    this.booleanRegister = true;
  }

  cancelModalRegister() {
    this.booleanRegister = false;
  }

  modalLogin() {
    this.booleanLogin = true;
  }

  cancelModalLogin() {
    this.booleanLogin = false;
  }


  public idadePetPelaDataDeNascimento(dataNascimento: any): String {
    let year = moment().diff(dataNascimento, 'years', true);
    let ano = Math.floor(year);
    let month = moment().diff(dataNascimento, 'months', true) - ano * 12;
    let mes = Math.floor(month);
    if (ano == 0) {
      if(mes == 1){
        return mes + ' mês';
      }
      return mes + ' meses';
    }
    else if (mes == 0){
      if(ano == 1){
        return ano + ' ano';
      }
      return ano + ' anos';
    }

    if(ano == 1 && mes == 1){
      return ano + ' ano e ' + mes + ' mês';
    }
    else if(ano == 1){
      return ano + ' ano e ' + mes + ' meses';
    }
    else if(mes == 1){
      return ano + ' anos e ' + mes + ' mês';
    }
    return ano + ' anos e ' + mes + ' meses';
  }
}
