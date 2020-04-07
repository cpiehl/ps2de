import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character.component';
import { FormsModule } from '@angular/forms';
import { NbInputModule, NbProgressBarModule, NbSpinnerModule, NbTabsetModule } from '@nebular/theme';
import { ChartModule } from 'angular2-chartjs';

@NgModule({
  declarations: [
    CharacterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartModule,
    NbInputModule,
    NbProgressBarModule,
    NbSpinnerModule,
    NbTabsetModule,
  ],
  exports: [
    CharacterComponent,
  ],
})
export class CharacterModule { }
