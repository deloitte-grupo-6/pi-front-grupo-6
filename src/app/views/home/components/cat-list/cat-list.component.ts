import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../../interfaces/pet';
import * as moment from 'moment';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css'],
})
export class CatListComponent implements OnInit {
  

  @Input() petList: Pet[];

  constructor() {}

  ngOnInit(): void {}

  public idadeGatoPelaDataDeNascimento(dataNascimento: any): String {
    return moment().diff(dataNascimento, 'years', true).toFixed(0) + ' anos';
  }
}
