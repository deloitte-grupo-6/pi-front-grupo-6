import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  @Output() showRegisterModal = new EventEmitter();
  @Output() showLoginModal = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onRegisterClick() {
    this.showRegisterModal.emit();
  }

  onLoginClick() {
    this.showLoginModal.emit();
  }
}
