import { Component, Input, OnInit } from '@angular/core';
import { Pet } from './interfaces/pet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  booleanRegister: boolean = false;
  booleanLogin: boolean = false;
  booleanDogList: boolean = false;
  booleanCatList: boolean = false;
  booleanOtherList: boolean = false;

  constructor() {}

  ngOnInit(): void {}

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

  showingDList() {
    this.booleanCatList = false;
    this.booleanOtherList = false;
    this.booleanDogList = true;
  }

  showingCList() {
    this.booleanDogList = false;
    this.booleanOtherList = false;
    this.booleanCatList = true;
  }

  showingOList() {
    this.booleanCatList = false;
    this.booleanDogList = false;
    this.booleanOtherList = true;
  }
}
