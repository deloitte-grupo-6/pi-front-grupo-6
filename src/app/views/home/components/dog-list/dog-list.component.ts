import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pet } from '../../interfaces/pet';
import * as moment from 'moment';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css'],
})
export class DogListComponent implements OnInit {
  @Output() dogDescription = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  @Input() petList: Pet[];

  // dogs = [
  //   {
  //     id: 1,
  //     nome: 'Luigi',
  //     raca: 'SRD',
  //     sexo: 'Macho',
  //     dataNascimento: '02-05-2018',
  //     descricao:
  //       'Olá, eu sou o Luigi e sou muito alegre e brincalhão! Adoro um chinelo e dar lambeijos de montão!',
  //   },
  //   {
  //     id: 2,
  //     nome: 'Mario',
  //     raca: 'SRD',
  //     sexo: 'Macho',
  //     dataNascimento: '02-05-2018',
  //     descricao:
  //       'Olá, eu sou o Mario e sou muito alegre e brincalhão! Adoro um chinelo e dar lambeijos de montão!',
  //   },
  //   {
  //     id: 3,
  //     nome: 'Yoshi',
  //     raca: 'SRD',
  //     sexo: 'Macho',
  //     dataNascimento: '02-05-2018',
  //     descricao:
  //       'Olá, eu sou o Yoshi e sou muito alegre e brincalhão! Adoro um chinelo e dar lambeijos de montão!',
  //   },
  //   {
  //     id: 4,
  //     nome: 'Bowser',
  //     raca: 'SRD',
  //     sexo: 'Macho',
  //     dataNascimento: '02-05-2018',
  //     descricao:
  //       'Olá, eu sou o Bowser e sou muito alegre e brincalhão! Adoro um chinelo e dar lambeijos de montão!',
  //   },
  // ];

  onModalDog(dog: number) {
    console.log('Cliquei');
    this.dogDescription.emit(dog);
  }

  public idadeCachorroPelaDataDeNascimento(dataNascimento: any): String {
    return moment().diff(dataNascimento, 'years', true).toFixed(0) + 'a';
  }
}
