import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  members = [
    {
      name: 'Gabriela',
      lastname: 'Vespoli',
      img: '../../../../../assets/images/woman.png',
    },
    {
      name: 'Hugo',
      lastname: 'Quadros',
      img: '../../../../../assets/images/man.png',
    },
    {
      name: 'Leandro',
      lastname: 'M. C.',
      img: '../../../../../assets/images/man.png',
    },
    {
      name: 'Patricia',
      lastname: 'Miyazaki',
      img: '../../../../../assets/images/woman.png',
    },
    {
      name: 'Rafael',
      lastname: 'Gonzaga',
      img: '../../../../../assets/images/man.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
