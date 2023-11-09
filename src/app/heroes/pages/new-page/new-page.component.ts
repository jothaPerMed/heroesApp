import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent {

public heroForm= new FormGroup(
  {
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', {nonNullable:true}),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl<string>(''),
    first_appearance: new FormControl<string>(''),
    characters: new FormControl<string>(''),
    alt_img: new FormControl<string>('')
  }
);
constructor(private herosService: HerosService){

}
public publishers =[
  {id:'DC Comics', desc:'DC - Comic'},
  {id:'Marvel Comics', desc:'Marvel - Comic'},
]


public onSubmit(){

  if(this.heroForm.invalid) return;

  if(this.currentHero.id){
    this.herosService.updateHero(this.currentHero).subscribe(
      hero=>
      //Mostrar SnakBar
      {

      });
      return;
  }else{
    this.herosService.addHero(this.currentHero).subscribe(
      hero=>
      //Mostrar SnakBar y navegar a /heroes/edit/ hero.id
      {

      });
      return;
  }
  this.herosService.updateHero(this.currentHero);
  console.log({
    formIsValid: this.heroForm.valid,
    value: this.heroForm.value
  });

}

get currentHero(): Hero{
  const hero= this.heroForm.value as Hero;
  return hero;
}


}
