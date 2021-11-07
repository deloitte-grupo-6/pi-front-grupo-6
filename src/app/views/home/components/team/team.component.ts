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
      img: '../../../../../assets/images/gabi_ok.png',
      gitUrl: 'https://github.com/gabihvespoli',
      linkedinUrl: 'https://www.linkedin.com/in/gabihvespoli/',
    },
    {
      name: 'Hugo',
      lastname: 'Quadros',
      img: '../../../../../assets/images/hugo_ok.png',
      gitUrl: 'https://github.com/HugoQuadros',
      linkedinUrl: 'https://www.linkedin.com/in/hugo-quadros/',
    },
    {
      name: 'Leandro',
      lastname: 'M. C.',
      img: '../../../../../assets/images/leandro_ok.png',
      gitUrl: 'https://github.com/LeandroMC',
      linkedinUrl: 'https://www.linkedin.com/in/lmcarneiro/',
    },
    {
      name: 'Patricia',
      lastname: 'Miyazaki',
      img: '../../../../../assets/images/paty_ok.png',
      gitUrl: 'https://github.com/pmiyazaki',
      linkedinUrl: 'https://www.linkedin.com/in/patricia-tamy-miyazaki/',
    },
    {
      name: 'Rafael',
      lastname: 'Gonzaga',
      img: '../../../../../assets/images/rafael_ok.png',
      gitUrl: 'https://github.com/rafagonzaga',
      linkedinUrl: 'https://www.linkedin.com/in/rafa-gonzaga/',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
