import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../../interfaces/pet';
import * as moment from 'moment';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css'],
})
export class CatListComponent implements OnInit {
  // cats = [
  //   {
  //     nome: 'Mimi',
  //     raca: 'SRD',
  //     sexo: 'Fêmea',
  //     dataNascimento: '03-05-2019',
  //     descricao:
  //       'Olá, eu sou o Luigi e sou muito alegre e brincalhão! Adoro um chinelo e dar lambeijos de montão!',
  //   },
  //   {
  //     nome: 'Mimi',
  //     raca: 'SRD',
  //     sexo: 'Fêmea',
  //     dataNascimento: '03-05-2019',
  //     descricao:
  //       'Olá, eu sou o Luigi e sou muito alegre e brincalhão! Adoro um chinelo e dar lambeijos de montão!',
  //   },
  //   {
  //     nome: 'Mimi',
  //     raca: 'SRD',
  //     sexo: 'Fêmea',
  //     dataNascimento: '03-05-2019',
  //     descricao:
  //       'Olá, eu sou o Luigi e sou muito alegre e brincalhão! Adoro um chinelo e dar lambeijos de montão!',
  //   },
  //   {
  //     nome: 'Mimi',
  //     raca: 'SRD',
  //     sexo: 'Fêmea',
  //     dataNascimento: '03-05-2019',
  //     descricao:
  //       'Olá, eu sou o Luigi e sou muito alegre e brincalhão! Adoro um chinelo e dar lambeijos de montão!',
  //   },
  // ];

  @Input() petList: Pet[];

  constructor() {}

  ngOnInit(): void {}

  public idadeGatoPelaDataDeNascimento(dataNascimento: any): String {
    return moment().diff(dataNascimento, 'years', true).toFixed(0) + 'a';
  }
}
