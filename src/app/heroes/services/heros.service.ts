import { Injectable } from '@angular/core';
import { HttpClient as http } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroments';
import { Hero } from '../interfaces/hero.interface';

@Injectable({
  providedIn: 'root'
})
export class HerosService {
  private baseUrl: string = enviroment.baseUrl;
  constructor(private http: http) { }


  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }
}
