import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.css'],
})
export class AdoptionComponent implements OnInit {
  @Output() hideAdoption = new EventEmitter();
  @Output() showAdoptModal = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onBtnCancelAdoption() {
    this.hideAdoption.emit();
  }

  onAdoptClick() {
    this.showAdoptModal.emit();
  }
}
