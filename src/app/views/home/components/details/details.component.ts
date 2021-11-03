import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../../interfaces/pet';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @Output() petById: Pet;

  booleanAdoptModal: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petService: PetService
  ) {}

  id: number;
  // petById: Pet;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = Number.parseInt(params['id']);
    });

    this.petService.getPetById(this.id).subscribe({
      next: (pet) => {
        this.petById = pet;
        console.log(pet);
      },
      error: (err) => console.error(err),
    });
  }

  modalAdopt() {
    this.booleanAdoptModal = true;
  }

  cancelAdoptModal() {
    this.booleanAdoptModal = false;
  }
}
