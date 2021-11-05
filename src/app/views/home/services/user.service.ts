import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

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

  getUserById(id: number){
    let token = window.sessionStorage.getItem('token');
    return this.http.get<User>(this.url + "/usuarios/buscar/" + id, {headers: {'Authorization': token}});
  }

  updateUser(nome: string, email: string, contato: string, documento: string, cidade: string, senha: string){
    let id = window.sessionStorage.getItem('id');
    let user = { id, nome, email, contato, documento, cidade, senha };
    let token = window.sessionStorage.getItem('token');
    return this.http.put(this.url + '/usuarios/atualizar', user, {headers: {'Authorization': token}});
  }
}
