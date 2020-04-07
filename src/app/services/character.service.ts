import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Characters, Character } from '../models/character.model';

const SEARCHURL = '/get/ps2:v2/character?name.first_lower=*#name#&c:resolve=world&c:limit=100';
const STATHISTORYURL = '/get/ps2:v2/character/?character_id=#id#&c:resolve=stat_history';

const DONTSAVETHESE = ['stats'];

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private http: HttpClient,
  ) { }

  searchByName(name: string) {
    return this.http.get<Characters>(SEARCHURL.replace('#name#', name.toLowerCase()));
  }

  getStatHistoryById(id: string) {
    return this.http.get<Characters>(STATHISTORYURL.replace('#id#', id));
  }

  setFavorite(character: Character, value: boolean) {
    let _character = JSON.parse(JSON.stringify(character));
    DONTSAVETHESE.forEach(s => _character[s] = undefined);
    let favorites = JSON.parse(localStorage.getItem('favoriteCharacters') || '{}');
    favorites[character.character_id] = value ? _character : undefined;
    localStorage.setItem('favoriteCharacters', JSON.stringify(favorites));
  }

  getFavorite(id: string): Character {
    let favorites = JSON.parse(localStorage.getItem('favoriteCharacters') || '{}');
    return favorites[id];
  }

  getFavorites(): Character[] {
    let favorites = JSON.parse(localStorage.getItem('favoriteCharacters') || '{}');
    return Object.values(favorites);
  }

  isFavorite(id: string): boolean {
    let favorites = JSON.parse(localStorage.getItem('favoriteCharacters') || '{}');
    return favorites[id] ? true : false;
  }

}
