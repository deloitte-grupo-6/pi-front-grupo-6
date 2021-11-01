import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() hideRegister = new EventEmitter();

  nome = '';
  email = '';
  contato = '';
  documento = '';
  cidade = '';
  senha = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSubmitRegister(form){
    console.log(form);
  }

  onBtnCancelRegister() {
    this.hideRegister.emit();
  }

  userRegister(){

    let observable = this.userService.registerUser(this.nome, this.email, this.contato, this.documento, this.cidade, this.senha);

    observable.subscribe(
      {
        next: data => {
          // window.sessionStorage.setItem("token", (<response>data).token);
          console.log(data);
        },
        error: err => console.log(err)
      }
    )
  }
}
