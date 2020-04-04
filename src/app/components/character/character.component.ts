import { Component, Input, AfterViewInit } from '@angular/core';
import { Character } from '../../models/character.model';
import { FactionService } from '../../services/faction.service';
import { Faction } from '../../models/faction.model';
import { AppConfigService } from '../../services/app.config.service';

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  private _character: Character;

  @Input() public set character(c: Character) {
    this._character = c;
    if (this._character)
      this.faction = this.factionService.getFaction(this._character.faction_id);
  };
  public get character(): Character {
    return this._character;
  }

  faction: Faction;
  baseUrl: string;

  constructor(
    private appConfigService: AppConfigService,
    private factionService: FactionService,
  ) {
    this.baseUrl = this.appConfigService.getServerUrl();
  }

}
