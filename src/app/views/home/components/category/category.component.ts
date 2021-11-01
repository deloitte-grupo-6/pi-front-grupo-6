import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pet } from '../../interfaces/pet';
import { PetService } from '../../services/pet.service';

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
      type: 'CACHORRO',
      img: '../../assets/images/dog.png',
    },
    {
      type: 'GATO',
      img: '../../assets/images/cat.png',
    },
    {
      type: 'OUTROS',
      img: '../../assets/images/adoption.png',
    },
  ];

  constructor(private petService: PetService) { }

  ngOnInit(): void {}

  showList(animal) {
    console.log('clicou no botão. Categoria:');
    console.log(animal);
    if (animal == 'CACHORRO') {
      // this.dogList.emit();
      this.petService.getDogs().subscribe(
        {
          next: dogs => {
            this.petList = dogs;
            console.log(dogs);
            this.dogList.emit();
          },
          error: err => console.error(err)
        }
      );
    }
    if (animal == 'GATO') {
      this.petService.getCats().subscribe(
        {
          next: cats => {
            this.petList = cats;
            console.log(cats);
            this.catList.emit();
          },
          error: err => console.error(err)
        }
      );
    }
    if (animal == 'OUTROS') {
      this.petService.getOthers().subscribe(
        {
          next: others => {
            this.petList = others;
            console.log(others);
            this.otherList.emit();
          },
          error: err => console.error(err)
        }
      );
    }
  }

  petList: Pet[];

  // getAvailablePets(){
  //   this.petService.getPets().subscribe(
  //     {
  //       next: pets => {
  //         this.petList = pets;
  //         //pega pelo pets, mas não pelo petList
  //         console.log("Carregando pets");
  //         console.log(pets);
  //       },
  //       error: err => console.error(err)
  //     }
  //   );
  //   console.log("Carregando petList");
  //   console.log(this.petList);
  // }
}
