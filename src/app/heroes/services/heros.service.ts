import { Injectable } from '@angular/core';
import { HttpClient as http } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
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

  //Autocompletado

  getSuggestions(query:string):Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&limit=6`);
  }


  // Añadir
  addHero(hero : Hero):Observable<Hero>{
    return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero);
  }

  // Actualizar
  updateHero(hero : Hero):Observable<Hero>{
    if(!hero.id) throw Error("Hero id is required")
    return this.http.patch<Hero>(`${this.baseUrl}/heroes/${ hero.id}`, hero);
  }

  // Eliminar
  deleteHero(id : string):Observable<boolean>{
    return this.http.delete(`${this.baseUrl}/heroes/${ id}`)
    .pipe(
      catchError(err=> of(false)),
      map(resp=> true)
    );
  }
}
