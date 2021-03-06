import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../../interfaces/pet';
import { PetService } from '../../services/pet.service';
import * as moment from 'moment';
import { NavBarComponent } from 'src/app/shared/nav-bar/nav-bar.component';

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
  booleanMyPage: boolean = false;
  booleanDogList: boolean = false;
  booleanCatList: boolean = false;
  booleanOtherList: boolean = false;
  // booleanLogout: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petService: PetService
  ) {
    NavBarComponent.showPetRegisterModal.subscribe(
      () => (this.booleanPetRegister = true)
    );

    NavBarComponent.showRegisterModal.subscribe(
      () => (this.booleanRegister = true)
    );
    NavBarComponent.showLoginModal.subscribe(() => (this.booleanLogin = true));

    NavBarComponent.showMyPageModal.subscribe(
      () => (this.booleanMyPage = true)
    );
  }

  id: number;
  petParaIdade: Pet;
  emailToken: string; //******TEMOS QUE PEGAR A PARTIR DO TOKEN*****
  idInteressado: number;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = Number.parseInt(params['id']);
    });

    if(typeof window.sessionStorage.getItem('token') == "string"){
      NavBarComponent.showPetButton.emit();
      NavBarComponent.showMyPageModal.emit();
      NavBarComponent.showLogoutButton.emit();
      NavBarComponent.hideRegisterButton.emit();
    } else{
      NavBarComponent.hidePetButton.emit();
      NavBarComponent.hideMyPageModal.emit();
      NavBarComponent.hideLogoutButton.emit();
      NavBarComponent.showRegisterButton.emit();
    }

    this.petService.getPetById(this.id).subscribe({
      next: (pet) => {
        this.petById = pet;
        this.petParaIdade = pet;
        console.log(pet);
      },
      error: (err) => console.error(err),
    });

    // this.petService.refreshToken();
  }

  modalAdopt() {
    this.idInteressado = parseInt(window.sessionStorage.getItem("id"));
    console.log(this.idInteressado);
    if(this.petById.doador.id == this.idInteressado){

      alert('Voc?? n??o pode adicionar ?? sua lista de interessados um Pet que voc?? cadastrou');

    } else{

      this.booleanAdoptModal = true;
      let observable = this.petService.addPetToTheList(this.id, this.idInteressado);
      observable.subscribe(
        (data) => console.log(data),
        (err) => console.log(err)
      )
      
    }

  }

  cancelAdoptModal() {
    this.booleanAdoptModal = false;
  }

  cancelModalPetRegister() {
    this.booleanPetRegister = false;
  }

  cancelModalRegister() {
    this.booleanRegister = false;
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
        return mes + ' m??s';
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
      return ano + ' ano e ' + mes + ' m??s';
    }
    else if(ano == 1){
      return ano + ' ano e ' + mes + ' meses';
    }
    else if(mes == 1){
      return ano + ' anos e ' + mes + ' m??s';
    }
    return ano + ' anos e ' + mes + ' meses';
  }
}
