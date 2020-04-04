import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { LocalDataSource } from 'ng2-smart-table';
import { FactionService } from '../../services/faction.service';
import { Faction } from '../../models/faction.model';
import { Character } from '../../models/character.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AppConfigService } from '../../services/app.config.service';
import { WorldService } from '../../services/world.service';
import { World } from '../../models/world.model';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  loading: boolean = true;
  settings = {
    actions: {
        columnTitle: '',
        add: false,
        edit: false,
        delete: false,
        custom: [],
        position: 'left',
    },
    // pager: { perPage: 20 },
    columns: {
      faction_id: {
        title: 'Faction',
        type: 'html',
        width: '1px',
        valuePrepareFunction: (id) => `<img width="20" height="20" src="${this.baseUrl}${this.getFaction(id).image_path}">`,
      },
      battle_rank: {
        title: 'BR',
        type: 'string',
        width: '1px',
        valuePrepareFunction: (br) => br.value,
        compareFunction: (d, a, b) => a.value && b.value ? d * (parseInt(a.value) - parseInt(b.value)) : 0,
      },
      name: {
        title: 'Name',
        type: 'string',
        sort: true,
        sortDirection: 'asc',
        valuePrepareFunction: (name) => name.first,
        compareFunction: (d, a, b) => a.first && b.first ? d * a.first.toLowerCase().localeCompare(b.first.toLowerCase()) : 0,
      },
      world_id: {
        title: 'Server',
        type: 'string',
        width: '1px',
        valuePrepareFunction: (id) => this.getWorld(id).name.en,
        compareFunction: (d, a, b) => a.name && b.name ? d * a.name.en.localeCompare(b.name.en) : 0,
      }
    },
  };

  baseUrl: string;
  source: LocalDataSource = new LocalDataSource();
  selectedRowIndex: number = undefined;
  character: Character;
  characterName: string;

  constructor(
    appConfigService: AppConfigService,
    private characterService: CharacterService,
    private factionService: FactionService,
    private worldService: WorldService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.baseUrl = appConfigService.getServerUrl();
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(paramMap => {
      if (paramMap.has('name')) {
        this.characterName = paramMap.get('name');
        this.loading = true;
        this.characterService.searchByName(this.characterName)
          .subscribe(data => {
            console.log(data);
            this.source.load(data.character_list);
            // this.characterList = data.character_list;
            this.loading = false;
          });
      }
    });
  }

  searchByName(name: string, nagivate: boolean = true) {
    if (nagivate) {
      this.router.navigate(
        [],
        {
          relativeTo: this.route,
          queryParams: { name: name },
          queryParamsHandling: 'merge'
        });
    }
  }

  getFaction(id: string) : Faction {
    return this.factionService.getFaction(id);
  }

  getWorld(id: string) : World {
    return this.worldService.getWorld(id);
  }

  selectRow(e: any) {
    this.character = e.data;
  }

}
