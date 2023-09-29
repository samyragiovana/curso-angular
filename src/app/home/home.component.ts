import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemons: any[] = []
  constructor(private pokemonservice: PokemonService) { }
  ngOnInit(): void {
    this.pokemonservice.listPokemons().subscribe(
      (data: any) => {
        this.pokemons = data.results;
        console.log(this.pokemons)
      }
    )
  }
  pegaImagensPokemon(numero: number){
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/" + numero + '.png';
  }
}
