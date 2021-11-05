import { Component, Input, OnInit } from '@angular/core';
import { NavBarComponent } from 'src/app/shared/nav-bar/nav-bar.component';
import { Pet } from './interfaces/pet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  booleanPetRegister: boolean = false;
  booleanRegister: boolean = false;
  booleanLogin: boolean = false;
  booleanMyPage: boolean = false;
  booleanDogList: boolean = false;
  booleanCatList: boolean = false;
  booleanOtherList: boolean = false;

  constructor() {
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

  ngOnInit(): void {
    if(typeof window.sessionStorage.getItem('token') == "string"){
      NavBarComponent.showPetButton.emit();
    } else{
      NavBarComponent.hidePetButton.emit();
    }
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

  showingDList() {
    this.booleanCatList = false;
    this.booleanOtherList = false;
    this.booleanDogList = !this.booleanDogList;
  }

  showingCList() {
    this.booleanDogList = false;
    this.booleanOtherList = false;
    this.booleanCatList = !this.booleanCatList;
  }

  showingOList() {
    this.booleanCatList = false;
    this.booleanDogList = false;
    this.booleanOtherList = !this.booleanOtherList;
  }
}
