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
    return this.http.get<Pet[]>('http://localhost:8080/pets');
  }

  

}


