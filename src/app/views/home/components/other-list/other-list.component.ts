import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../../interfaces/pet';
import * as moment from 'moment';
@Component({
  selector: 'app-other-list',
  templateUrl: './other-list.component.html',
  styleUrls: ['./other-list.component.css'],
})
export class OtherListComponent implements OnInit {

  @Input() petList: Pet[];

  constructor() {}

  ngOnInit(): void {}

  public idadeOutrosPelaDataDeNascimento(dataNascimento: any): String {
    return moment().diff(dataNascimento, 'years', true).toFixed(0) + ' anos';
  }
}
