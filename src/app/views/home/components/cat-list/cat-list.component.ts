import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css'],
})
export class CatListComponent implements OnInit {
  cats = [
    {
      nome: 'Mimi',
      raca: 'SRD',
      sexo: 'Fêmea',
      dataNascimento: '03-05-2019',
      descricao:
        'Olá, eu sou o Luigi e sou muito alegre e brincalhão! Adoro um chinelo e dar lambeijos de montão!',
    },
    {
      nome: 'Mimi',
      raca: 'SRD',
      sexo: 'Fêmea',
      dataNascimento: '03-05-2019',
      descricao:
        'Olá, eu sou o Luigi e sou muito alegre e brincalhão! Adoro um chinelo e dar lambeijos de montão!',
    },
    {
      nome: 'Mimi',
      raca: 'SRD',
      sexo: 'Fêmea',
      dataNascimento: '03-05-2019',
      descricao:
        'Olá, eu sou o Luigi e sou muito alegre e brincalhão! Adoro um chinelo e dar lambeijos de montão!',
    },
    {
      nome: 'Mimi',
      raca: 'SRD',
      sexo: 'Fêmea',
      dataNascimento: '03-05-2019',
      descricao:
        'Olá, eu sou o Luigi e sou muito alegre e brincalhão! Adoro um chinelo e dar lambeijos de montão!',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
