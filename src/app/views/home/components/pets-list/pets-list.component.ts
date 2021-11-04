import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../../interfaces/pet';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css'],
})
export class PetsListComponent implements OnInit {
  @Input() petById: Pet;

  constructor() {}

  ngOnInit(): void {}
}
