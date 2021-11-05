import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly url = 'https://api-g6.herokuapp.com';

  constructor(private http: HttpClient) {}

  registerUser(
    nome: string,
    email: string,
    contato: string,
    documento: string,
    cidade: string,
    senha: string
  ) {
    let user = { nome, email, contato, documento, cidade, senha };

    return this.http.post(this.url + '/usuarios/cadastrar', user);
  }

  loginUser(email: string, senha: string){
    return this.http.post(this.url + "/usuarios/login", {email, senha});
  }
}
