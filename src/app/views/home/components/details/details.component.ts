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
  @Output() showAdoptModal = new EventEmitter();
  booleanAdoptModal: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  id: number;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = Number.parseInt(params['id']);
    });
  }

  onAdoptClick() {
    this.showAdoptModal.emit();
  }

  modalAdopt() {
    this.booleanAdoptModal = true;
  }

  cancelAdoptModal() {
    this.booleanAdoptModal = false;
  }
}
