import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  @Output() dogList = new EventEmitter();
  @Output() catList = new EventEmitter();
  @Output() otherList = new EventEmitter();

  categoryData = [
    {
      type: 'Cachorro',
      img: '../../assets/images/dog.png',
    },
    {
      type: 'Gato',
      img: '../../assets/images/cat.png',
    },
    {
      type: 'Outros',
      img: '../../assets/images/adoption.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  showList(animal) {
    if (animal == 'Cachorro') {
      this.dogList.emit();
    }
    if (animal == 'Gato') {
      this.catList.emit();
    }
    if (animal == 'Outros') {
      this.otherList.emit();
    }
  }
}
