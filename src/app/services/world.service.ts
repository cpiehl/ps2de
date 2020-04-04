import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Worlds, World } from '../models/world.model';

const URL = '/get/ps2:v2/world?c:limit=100'

@Injectable({
  providedIn: 'root'
})
export class WorldService {

  worlds: World[];
  worldsLookup: {} = undefined;
  
  constructor(
    private http: HttpClient,
  ) {
    console.log('WorldService init');
    this.http.get<Worlds>(URL).subscribe(
      data => {
        this.worlds = data.world_list;

        this.worldsLookup = {};
        this.worlds.forEach(w => {
          this.worldsLookup[w.world_id] = w;
        });
      });
  }

  getWorld(id: string): World {
    if (this.worldsLookup)
      return this.worldsLookup[id];
    return undefined;
  }
}
