import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterModule } from '../../components/character/character.module';
import { NbSelectModule, NbCardModule, NbInputModule, NbTabsetModule } from '@nebular/theme';
import { CompareComponent } from './compare.component';

const components = [
  CompareComponent,
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    FormsModule,

    NbCardModule,
    NbInputModule,
    NbSelectModule,
    NbTabsetModule,
    
    CharacterModule,
  ],
  exports: [...components],
})
export class CompareModule { }
