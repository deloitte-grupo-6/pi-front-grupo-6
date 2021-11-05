import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../interfaces/pet';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  constructor(private http: HttpClient) { }

  private readonly url = 'https://api-g6.herokuapp.com';

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
    return this.http.post(this.url + '/pets/cadastrar', pet, {headers: {'Authorization': token}});
  }

  getPetById(id: number): Observable<Pet> {
    let token = window.sessionStorage.getItem('token');
    return this.http.get<Pet>(this.url + '/pets/id/' + id, { headers: { Authorization: token } });
  }

  addPetToTheList(petId: number, email: string) {
    let token = window.sessionStorage.getItem('token');
    return this.http.put<Pet>(this.url + "/pets/" + petId + "/interessado/" + email, { headers: { Authorization: token } });
  }
}
