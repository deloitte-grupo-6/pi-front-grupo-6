import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-list',
  templateUrl: './other-list.component.html',
  styleUrls: ['./other-list.component.css'],
})
export class OtherListComponent implements OnInit {
  others = [
    {
      nome: 'Tweety',
      raca: 'Calopsita',
      sexo: 'Macho',
      dataNascimento: '02-05-2020',
      descricao:
        'Olá, eu sou o Luigi e sou muito alegre e brincalhão! Adoro um chinelo e dar lambeijos de montão!',
    },
    {
      nome: 'Tweety',
      raca: 'Calopsita',
      sexo: 'Macho',
      dataNascimento: '02-05-2020',
      descricao:
        'Olá, eu sou o Luigi e sou muito alegre e brincalhão! Adoro um chinelo e dar lambeijos de montão!',
    },
    {
      nome: 'Tweety',
      raca: 'Calopsita',
      sexo: 'Macho',
      dataNascimento: '02-05-2020',
      descricao:
        'Olá, eu sou o Luigi e sou muito alegre e brincalhão! Adoro um chinelo e dar lambeijos de montão!',
    },
    {
      nome: 'Tweety',
      raca: 'Calopsita',
      sexo: 'Macho',
      dataNascimento: '02-05-2020',
      descricao:
        'Olá, eu sou o Luigi e sou muito alegre e brincalhão! Adoro um chinelo e dar lambeijos de montão!',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
