import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

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
  static hidePetButton = new EventEmitter();
  static showRegisterButton = new EventEmitter();
  static hideRegisterButton = new EventEmitter();
  static showMyPageModal = new EventEmitter();
  static hideMyPageModal = new EventEmitter();
  static showLogoutButton = new EventEmitter();
  static hideLogoutButton = new EventEmitter();

  booleanPetRegister: boolean;
  booleanMyPage: boolean;
  booleanRegisterButton: boolean;
  booleanLoginButton: boolean;
  booleanLogoutButton: boolean = false;

  constructor(private router: Router) {
    NavBarComponent.showPetButton.subscribe(
      () => this.booleanPetRegister = true
    )

    NavBarComponent.hidePetButton.subscribe(
      () => this.booleanPetRegister = false
    )

    NavBarComponent.showMyPageModal.subscribe(
      () => (this.booleanMyPage = true)
    );

    NavBarComponent.hideMyPageModal.subscribe(
      () => (this.booleanMyPage = false)
    );

    NavBarComponent.showRegisterButton.subscribe(
      () => (this.booleanRegisterButton = true, this.booleanLoginButton = true)
    )

    NavBarComponent.hideRegisterButton.subscribe(
      () => (this.booleanRegisterButton = false, this.booleanLoginButton = false)
    )

    NavBarComponent.showLogoutButton.subscribe(
      () => (this.booleanLogoutButton = true)
    )

    NavBarComponent.hideLogoutButton.subscribe(
      () => (this.booleanLogoutButton = false)
    )

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

  logout(){
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('id');
    window.sessionStorage.removeItem('email');
    console.log(this.router.url);
    if(this.router.url == '/'){
      window.location.reload();
    }
  }
}
