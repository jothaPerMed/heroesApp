import { Injectable } from '@angular/core';
import { HttpClient as http } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
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


  getHeroById(id:string):Observable<Hero|undefined>{
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
    .pipe(
      catchError(error=>of (undefined))//se regresa un undefined en el caso que no exista
    )
  }
}
