import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterTableComponent } from './components/character-table/character-table.component';
import { EpisodesTableComponent } from './components/episodes-table/episodes-table.component';
import { ParticipationTableComponent } from './components/participation-table/participation-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterTableComponent,
    EpisodesTableComponent,
    ParticipationTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
