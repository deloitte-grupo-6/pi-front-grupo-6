import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pet } from '../../interfaces/pet';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.css'],
})
export class AdoptionComponent implements OnInit {
  @Output() hideAdoption = new EventEmitter();
  @Input() petById: Pet;

  constructor() {}

  ngOnInit(): void {}

  onBtnCancelAdoption() {
    this.hideAdoption.emit();
  }
}
