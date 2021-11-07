import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../interfaces/pet';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  constructor(private http: HttpClient) { }

  private readonly url = 'https://api-g6.herokuapp.com';
  // private readonly url = 'http://localhost:8080';

  // token = {headers: new HttpHeaders().set('Authorization', window.sessionStorage.getItem('token'))};



  // refreshToken() {
  //   // this.token = {headers: new HttpHeaders().set('Authorization', window.sessionStorage.getItem('token'))};
  //   this.token = window.sessionStorage.getItem('token');
  // }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.url + '/pets');
  }

  getDogs(): Observable<Pet[]> {
    console.log('Entrou no serviço do cachorro');
    return this.http.get<Pet[]>(this.url + '/pets/especie/CACHORRO/true');
  }

  getCats(): Observable<Pet[]> {
    console.log('Entrou no serviço do gato');
    return this.http.get<Pet[]>(this.url + '/pets/especie/GATO/true');
  }

  getOthers(): Observable<Pet[]> {
    console.log('Entrou no serviço do outros');
    return this.http.get<Pet[]>(this.url + '/pets/especie/OUTROS/true');
  }

  registerPet(
    nome: string,
    especie: string,
    raca: string,
    sexo: string,
    dataNascimento: string,
    descricao: string,
    imagemUrl: string,
    idDoador: number
  ) {
    let doador = { id: idDoador };
    let pet = {
      nome,
      doador,
      especie,
      raca,
      sexo,
      dataNascimento,
      descricao,
      imagemUrl,
    };
    let token = window.sessionStorage.getItem('token');
    // return this.http.post(this.url + '/pets/cadastrar', pet, {headers: {'Authorization': token}});
    return this.http.post(this.url + '/pets/cadastrar', pet, { headers: { 'Authorization': token } });
  }

  getPetById(id: number): Observable<Pet> {
    let token = window.sessionStorage.getItem('token');
    return this.http.get<Pet>(this.url + '/pets/id/' + id, { headers: { Authorization: token } });
  }

  // //ADICIONANDO À LISTA COM EMAIL - DANDO ERRO
  // addPetToTheList(petId: number, email: string) {
  //   let token = window.sessionStorage.getItem('token');
  //   console.log(token);
  //   return this.http.put<Pet>(this.url + "/pets/" + petId + "/interessado/" + email, { headers: { Authorization: token } });
  // }

  // ADICIONANDO À LISTA COM ID
  addPetToTheList(petId: number, id: number) {
    let token = window.sessionStorage.getItem('token');
    console.log(token);
    return this.http.put<Pet>(this.url + "/pets/" + petId + "/interessado/" + id, '', { headers: { 'Authorization': token } });
  }

  updatePet(id: number, nome: string, especie: string, raca: string, sexo: string, dataNascimento: Date, descricao: string, imagemUrl: string){
    let token = window.sessionStorage.getItem('token');
    let idDoador = window.sessionStorage.getItem('id');
    let doador = { id: idDoador};
    console.log(token);
    let pet = {id, nome, doador, especie, raca, sexo, dataNascimento, descricao, imagemUrl,
    };
    return this.http.put<Pet>(this.url + '/pets/editar', pet, { headers: { 'Authorization': token } })
  }

  donatePetById(petId: number){
    let token = window.sessionStorage.getItem('token');
    console.log(token);
    return this.http.put<Pet>(this.url + '/pets/doar/' + petId, '', { headers: { 'Authorization': token } })
  }

  deletePetById(petId: number){
    let token = window.sessionStorage.getItem('token');
    console.log(token);
    return this.http.delete(this.url + '/pets/deletar/' + petId, { headers: { 'Authorization': token } })
  }
}
