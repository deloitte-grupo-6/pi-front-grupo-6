import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly url = 'https://api-g6.herokuapp.com';

  constructor(private https: HttpClient) {}

  registerUser(
    nome: string,
    email: string,
    contato: string,
    documento: string,
    cidade: string,
    senha: string
  ) {
    let user = { nome, email, contato, documento, cidade, senha };

    return this.https.post(this.url + '/usuarios/cadastrar', user);
  }

  loginUser(email: string, senha: string) {
    // MUDAR O ENDEREÇO DO ENDPOINT PARA O CORRETO
    return this.https.post(
      this.url + '/usuarios/login',
      { email, senha },
      { observe: 'response' }
    );
  }
}
