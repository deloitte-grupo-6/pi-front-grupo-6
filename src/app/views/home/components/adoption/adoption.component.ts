import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pet } from '../../interfaces/pet';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.css'],
})
export class AdoptionComponent implements OnInit {
  @Output() hideAdoption = new EventEmitter();
  @Input() petById: Pet;

  // PEGAR O DOADOR PELO ENDPOINT
  doador: User;

  constructor() {}

  ngOnInit(): void {}

  onBtnCancelAdoption() {
    this.hideAdoption.emit();
  }
}
