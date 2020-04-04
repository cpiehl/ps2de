import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Factions, Faction } from '../models/faction.model';

const FACTIONURL = '/get/ps2:v2/faction?c:limit=100';

@Injectable({
  providedIn: 'root'
})
export class FactionService {

  factions: Faction[];
  factionLookup: {} = undefined;

  constructor(
    private http: HttpClient,
  ) {
    console.log('FactionService init');
    this.http.get<Factions>(FACTIONURL).subscribe(
      data => {
        this.factions = data.faction_list;
        
        this.factionLookup = {};
        this.factions.forEach(f => {
          this.factionLookup[f.faction_id] = f;
        });
      });
  }

  getFaction(id: string): Faction {
    if (this.factionLookup)
      return this.factionLookup[id];
    return undefined;
  }
  
}
