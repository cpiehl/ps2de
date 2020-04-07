import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { Character } from '../../models/character.model';
import { FactionService } from '../../services/faction.service';
import { Faction } from '../../models/faction.model';
import { AppConfigService } from '../../services/app.config.service';
import { CharacterService } from '../../services/character.service';
import { NbThemeService } from '@nebular/theme';

const tabDict = {'Daily': 'day', 'Weekly': 'week', 'Monthly': 'month'};
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnDestroy {

  loading: boolean = false;
  baseUrl: string;
  private _character: Character;

  @Input() public set character(c: Character) {
    if (c)
    {
      this._character = c;
      this.loading = true;
      this.faction = this.factionService.getFaction(this._character.faction_id);
      this.characterService.getStatHistoryById(this._character.character_id).subscribe(data => {
        this._character = {...this._character, ...data.character_list[0]};
        // if (this.characterService.isFavorite(this._character.character_id)) {
        //   this.characterService.setFavorite(this._character, true);
        // }

        if (this._character.stats) {

          let startTime = Date.parse(this._character.times.last_save_date);
          let startDate = new Date();
          startDate.setTime(startTime);
          let labels = {
            'Daily': [...Array(31).keys()].map(d => {
              if (d % 7 === 0) {
                let date = new Date();
                date.setTime(startTime - (86400000 * d)); // 86400000 = 1 day of milliseconds
                return `${date.getMonth() + 1}/${date.getDate()}`;
              } else {
                return '';
              }
            }),
            'Weekly': [...Array(13).keys()].map(w => {
              if (w % 2 === 0) {
                let date = new Date();
                date.setTime(startTime - (604800000 * w)); // ‭604800000‬ = 7 days of milliseconds
                return `${date.getMonth() + 1}/${date.getDate()}`;
              } else {
                return '';
              }
            }),
            'Monthly': [...Array(12).keys()].map(m => {
              if (m % 3 === 0) {
                let month = ((startDate.getMonth() + 24 - m) % 12);
                return `${months[month]}`;
              } else {
                return '';
              }
            }),
          };
          
          let certs = this._character.stats.stat_history.filter(s => s.stat_name === 'certs');
          let kills = this._character.stats.stat_history.filter(s => s.stat_name === 'kills');
          let deaths = this._character.stats.stat_history.filter(s => s.stat_name === 'deaths');
          let score = this._character.stats.stat_history.filter(s => s.stat_name === 'score');
          let time = this._character.stats.stat_history.filter(s => s.stat_name === 'time');

          this.stats = {};
          Object.keys(tabDict).forEach(key => this.stats[key] = {
            labels: labels[key].reverse(),
            datasets: [
              {
                data: Object.values(certs[0][tabDict[key]]).reverse(),
                label: 'Certs',
                backgroundColor: '#ffaa0055',
                borderColor: '#ffaa00',
              },
              {
                data: Object.values(kills[0][tabDict[key]]).reverse(),
                label: 'Kills',
                backgroundColor: '#0095ff55',
                borderColor: '#0095ff',
              },
              {
                data: Object.values(deaths[0][tabDict[key]]).reverse(),
                label: 'Deaths',
                backgroundColor: '#ff3d7155',
                borderColor: '#ff3d71',
              },
              {
                data: Object.values(score[0][tabDict[key]]).reverse(),
                label: 'Score',
                backgroundColor: '#00d68f55',
                borderColor: '#00d68f',
                hidden: true,
              },
              {
                data: Object.values(time[0][tabDict[key]]).reverse(),
                label: 'Time',
                backgroundColor: '#a16eff55',
                borderColor: '#a16eff',
                hidden: true,
              },
            ],
          });
        }

        this.loading = false;
      });
    } else {
      this._character = undefined;
    }
  };
  public get character(): Character {
    return this._character;
  }

  stats: {};
  selectedTabTitle: string = 'Daily';
  faction: Faction;
  options: any;
  themeSubscription: any;

  constructor(
    private appConfigService: AppConfigService,
    private characterService: CharacterService,
    private factionService: FactionService,
    private theme: NbThemeService,
  ) {
    this.baseUrl = this.appConfigService.getServerUrl();
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  // changeTab(event) {
  //   console.log(event.tabTitle);
  //   this.selectedTabTitle = event.tabTitle;

  //   console.log(this.stats);
  // }
}
