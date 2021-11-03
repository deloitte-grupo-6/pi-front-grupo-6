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

  // currentYear: number = new Date().getFullYear();

  public idadeCachorroPelaDataDeNascimento(dataNascimento: Date): String {
    let year = moment().diff(dataNascimento, 'years', true);
    let ano = Math.floor(year);
    let month = moment().diff(dataNascimento, 'months', true) - ano * 12;
    let mes = Math.floor(month);
    if (ano == 0) {
      if(mes == 1){
        return mes + ' mês';
      }
      return mes + ' meses';
    }
    else if (mes == 0){
      if(ano == 1){
        return ano + ' ano';
      }
      return ano + ' anos';
    }

    if(ano == 1 && mes == 1){
      return ano + ' ano e ' + mes + ' mês';
    }
    else if(ano == 1){
      return ano + ' ano e ' + mes + ' meses';
    }
    else if(mes == 1){
      return ano + ' anos e ' + mes + ' mês';
    }
    return ano + ' anos e ' + mes + ' meses';
  }
}
