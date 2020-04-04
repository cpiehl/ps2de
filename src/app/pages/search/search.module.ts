import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { NbCardModule, NbButtonModule, NbInputModule, NbSpinnerModule, NbIconModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CharacterModule } from '../../components/character/character.module';

@NgModule({
  declarations: [
    SearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbSpinnerModule,
    
    Ng2SmartTableModule,

    CharacterModule,
  ]
})
export class SearchModule { }
