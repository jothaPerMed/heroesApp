import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HerosService } from '../../services/heros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent implements OnInit {

  public heroForm = new FormGroup(
    {
      id: new FormControl<string>(''),
      superhero: new FormControl<string>('', { nonNullable: true }),
      publisher: new FormControl<Publisher>(Publisher.DCComics),
      alter_ego: new FormControl<string>(''),
      first_appearance: new FormControl<string>(''),
      characters: new FormControl<string>(''),
      alt_img: new FormControl<string>('')
    }
  );
  constructor(private herosService: HerosService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar) {

  }
  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;
    this.activatedRouter.params
      .pipe(
        switchMap(({ id }) => this.herosService.getHeroById(id)),

      ).subscribe(heroe => {
        if (!heroe) {
          return this.router.navigateByUrl('/');
        }
        this.heroForm.reset(heroe);
        return;

      })
  }
  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comic' },
    { id: 'Marvel Comics', desc: 'Marvel - Comic' },
  ]


  public onSubmit() {

    if (this.heroForm.invalid) return;

    if (this.currentHero.id) {
      this.herosService.updateHero(this.currentHero).subscribe(
        hero =>
        //Mostrar SnakBar
        {
          this.showSnackBar(`${hero.superhero} updated`);
        });
      return;
    } else {
      this.herosService.addHero(this.currentHero).subscribe(
        hero =>
        //Mostrar SnakBar y navegar a /heroes/edit/ hero.id
        {
          this.router.navigate(['/heroes/edit', hero.id]);
          this.showSnackBar(`${hero.superhero} created`);
        });
      return;
    }
    this.herosService.updateHero(this.currentHero);
    console.log({
      formIsValid: this.heroForm.valid,
      value: this.heroForm.value
    });

  }

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  showSnackBar(message: string): void {
    this.snackBar.open(message, 'done', {
      duration: 2500
    })
  }


}
