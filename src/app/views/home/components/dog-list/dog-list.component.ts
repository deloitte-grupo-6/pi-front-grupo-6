import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css'],
})
export class DogListComponent implements OnInit {
  dogs = [
    {
      nome: 'Luigi',
      raca: 'SRD',
      sexo: 'Macho',
      dataNascimento: '02-05-2018',
      descricao:
        'Olá, eu sou o Luigi e sou muito alegre e brincalhão! Adoro um chinelo e dar lambeijos de montão!',
    },
    {
      nome: 'Luigi',
      raca: 'SRD',
      sexo: 'Macho',
      dataNascimento: '02-05-2018',
      descricao:
        'Olá, eu sou o Luigi e sou muito alegre e brincalhão! Adoro um chinelo e dar lambeijos de montão!',
    },
    {
      nome: 'Luigi',
      raca: 'SRD',
      sexo: 'Macho',
      dataNascimento: '02-05-2018',
      descricao:
        'Olá, eu sou o Luigi e sou muito alegre e brincalhão! Adoro um chinelo e dar lambeijos de montão!',
    },
    {
      nome: 'Luigi',
      raca: 'SRD',
      sexo: 'Macho',
      dataNascimento: '02-05-2018',
      descricao:
        'Olá, eu sou o Luigi e sou muito alegre e brincalhão! Adoro um chinelo e dar lambeijos de montão!',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
