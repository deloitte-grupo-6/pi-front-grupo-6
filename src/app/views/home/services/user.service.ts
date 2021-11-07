import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from '../interfaces/pet';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly url = 'https://api-g6.herokuapp.com';
  // private readonly url = 'http://localhost:8080';

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

  updateUser(id: number, nome: string, email: string, contato: string, documento: string, cidade: string, senha: string){
    // let id = window.sessionStorage.getItem('id');
    let user = { id, nome, email, contato, documento, cidade, senha };
    console.log(user);
    let token = window.sessionStorage.getItem('token');
    return this.http.put(this.url + '/usuarios/atualizar', user, {headers: {'Authorization': token}});
  }

  getPetsDoacao(id: number){
    let token = window.sessionStorage.getItem('token');
    return this.http.get<Pet[]>(this.url + '/usuarios/' + id + '/pets-em-doacao', {headers: {'Authorization': token}});
  }

  getPetsInteressados(id: number){
    let token = window.sessionStorage.getItem('token');
    return this.http.get<Pet[]>(this.url + '/usuarios/' + id + '/pets-interessados', {headers: {'Authorization': token}});
  }
}
