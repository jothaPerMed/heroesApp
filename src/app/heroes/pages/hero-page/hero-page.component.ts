import { Component, OnInit } from '@angular/core';
import { HerosService } from '../../services/heros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../interfaces/hero.interface';
import {delay, switchMap } from 'rxjs';
@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: [
  ]
})
export class HeroPageComponent implements OnInit{
 public heroe?: Hero;
  constructor(private heroService: HerosService, private activatedRoute : ActivatedRoute, private route:Router ){

  }
  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      delay(300),
      switchMap( ({id})=>this.heroService.getHeroById(id))
    ).subscribe(hero=>{
      this.heroe=hero;
      if(!this.heroe) return this.route.navigate(['/hero.list'])
      console.log({hero});
      return;

    })

  }



  public goBack(){
    this.route.navigateByUrl('heroes/list')
  }
}
