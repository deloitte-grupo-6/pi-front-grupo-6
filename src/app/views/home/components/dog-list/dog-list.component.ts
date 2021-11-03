import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pet } from '../../interfaces/pet';
import * as moment from 'moment';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css'],
})
export class DogListComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  @Input() petList: Pet[];


  public idadeCachorroPelaDataDeNascimento(dataNascimento: any): String {
    return moment().diff(dataNascimento, 'years', true).toFixed(0) + ' anos';
  }
}
