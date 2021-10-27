import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() ModalCancel = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onBtnCancel(){
    this.ModalCancel.emit();
  }

}
