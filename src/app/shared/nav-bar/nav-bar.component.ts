import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  static showRegisterModal = new EventEmitter();
  static showLoginModal = new EventEmitter();
  static showPetRegisterModal = new EventEmitter();
  static showPetButton = new EventEmitter();
  static showMyPageModal = new EventEmitter();

  booleanPetRegister: boolean;
  booleanMyPage: boolean;

  constructor() {
    NavBarComponent.showPetButton.subscribe(
      () => (this.booleanPetRegister = true)
    );
    NavBarComponent.showMyPageModal.subscribe(
      () => (this.booleanMyPage = true)
    );
  }

  ngOnInit(): void {}

  onPetRegisterClick() {
    NavBarComponent.showPetRegisterModal.emit();
  }

  onRegisterClick() {
    NavBarComponent.showRegisterModal.emit();
  }

  onLoginClick() {
    NavBarComponent.showLoginModal.emit();
  }

  onMyPageClick() {
    NavBarComponent.showMyPageModal.emit();
  }
}
