import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character.component';
import { FormsModule } from '@angular/forms';
import { NbInputModule } from '@nebular/theme';

@NgModule({
  declarations: [
    CharacterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NbInputModule,
  ],
  exports: [
    CharacterComponent,
  ],
})
export class CharacterModule { }
