import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../interfaces/pet';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) { }


  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>('https://pi-grupo6-test.herokuapp.com/pets');
  }

  getDogs(): Observable<Pet[]> {
    console.log("Entrou no serviço do cachorro");
    return this.http.get<Pet[]>('https://pi-grupo6-test.herokuapp.com/pets/especie/CACHORRO/true');
  }

  getCats(): Observable<Pet[]> {
    console.log("Entrou no serviço do gato");
    return this.http.get<Pet[]>('https://pi-grupo6-test.herokuapp.com/pets/especie/GATO/true');
  }

  getOthers(): Observable<Pet[]> {
    console.log("Entrou no serviço do outros");
    return this.http.get<Pet[]>('https://pi-grupo6-test.herokuapp.com/pets/especie/OUTROS/true');
  }

  

}


