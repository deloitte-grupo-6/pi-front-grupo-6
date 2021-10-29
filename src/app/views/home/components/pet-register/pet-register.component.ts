import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pet-register',
  templateUrl: './pet-register.component.html',
  styleUrls: ['./pet-register.component.css'],
})
export class PetRegisterComponent implements OnInit {
  @Output() hidePetRegister = new EventEmitter();
  @Output() defaultBtn = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onBtnCancelPetRegister() {
    this.hidePetRegister.emit();
  }

  defaultBtnActive() {
    this.defaultBtn.emit();
  }
}
