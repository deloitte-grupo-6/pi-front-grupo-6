import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() hideRegister = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmitRegister(form){
    console.log(form);
  }

  onBtnCancelRegister() {
    this.hideRegister.emit();
  }
}
