import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HerosService } from '../../services/heros.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent {

  public searchInput = new FormControl('');
  public heroes: Hero[] = []
  public selectedHeroes?: Hero;

  constructor(private herosService: HerosService) {

  }
  searchHero() {
    const value: string = this.searchInput.value || '';
    if (value.length === 0) return;
    this.herosService.getSuggestions(value)
      .subscribe(heroes => this.heroes = heroes);

  }


  onSelectedOptions(event: MatAutocompleteSelectedEvent) {
    console.log({ event });
    if (!event.option.value) {
      this.selectedHeroes = undefined;
      return;
    }


    const hero: Hero = event.option.value;
    this.searchInput.setValue(hero.superhero);

  }

}
