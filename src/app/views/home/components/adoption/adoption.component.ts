import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pet } from '../../interfaces/pet';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.css'],
})
export class AdoptionComponent implements OnInit {
  @Output() hideAdoption = new EventEmitter();
  @Input() petById: Pet;

  // PEGAR O DOADOR PELO ENDPOINT
  // doador: User;

  constructor(private userService:UserService) {}

  ngOnInit(): void { }

  onBtnCancelAdoption() {
    this.hideAdoption.emit();
  }
}
