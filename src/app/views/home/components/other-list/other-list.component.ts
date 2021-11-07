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
