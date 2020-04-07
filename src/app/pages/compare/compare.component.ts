import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent {

  favorites: Character[];
  characterA: Character;
  characterB: Character;

  constructor(
    private characterService: CharacterService,
  ) { 
    this.favorites = this.characterService.getFavorites();
    console.log(this.favorites);
  }

}
