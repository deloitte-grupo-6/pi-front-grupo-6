import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../interfaces/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  
  constructor(private http: HttpClient) { }

  private readonly url="https://api-g6.herokuapp.com";


  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.url + '/pets');
  }

  getDogs(): Observable<Pet[]> {
    console.log("Entrou no serviço do cachorro");
    return this.http.get<Pet[]>(this.url + '/pets/especie/CACHORRO/true');
  }

  getCats(): Observable<Pet[]> {
    console.log("Entrou no serviço do gato");
    return this.http.get<Pet[]>(this.url + '/pets/especie/GATO/true');
  }

  getOthers(): Observable<Pet[]> {
    console.log("Entrou no serviço do outros");
    return this.http.get<Pet[]>(this.url + '/pets/especie/OUTROS/true');
  }

  registerPet(nome: string, especie: string, raca: string, sexo: string, dataNascimento: string, descricao: string, imagemUrl: string){
    let doador = {"id": 2};
    let pet = {nome, doador, especie, raca, sexo, dataNascimento, descricao, imagemUrl};
    // console.log(pet);
    return this.http.post(this.url + "/pets/cadastrar", pet);
  }

  getPetById(id: number): Observable<Pet> {
    return this.http.get<Pet>(this.url + "/pets/id/" + id);
  }
}


