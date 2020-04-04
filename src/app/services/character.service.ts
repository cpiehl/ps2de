import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Characters } from '../models/character.model';

const URL = '/get/ps2:v2/character?name.first_lower=*#name#&c:resolve=world&c:limit=100';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private http: HttpClient,
  ) { }

  searchByName(name: string) {
    return this.http.get<Characters>(URL.replace('#name#', name.toLowerCase()));
  }

}
