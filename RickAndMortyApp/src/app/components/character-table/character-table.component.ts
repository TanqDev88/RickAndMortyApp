import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character} from '../../models/character.model';
import { ApiResponse } from '../../models/apiResponse.model';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-character-table',
  templateUrl: './character-table.component.html',
  styleUrls: ['./character-table.component.scss']
})
export class CharacterTableComponent implements OnInit {
  characters: any[] = [];

  constructor(private characterService: CharacterService, private router: Router,  private translate: TranslateService) { }

  ngOnInit(): void {
    this.loadCharacters();
    this.translate.setDefaultLang('en'); // Cambia 'en' al idioma por defecto que desees
    this.translate.use('en'); // Cambia 'en' al idioma que deseas usar inicialmente
    this.loadCharacters();
  }

  loadCharacters() {
    this.characterService.getCharacters().subscribe(
      (response: ApiResponse<Character>) => {
        this.characters = this.transformCharacterData(response.results);
      },
      error => {
        console.log('Error fetching characters:', error);
      }
    );
  }

  private transformCharacterData(characters: Character[]): any[] {
    return characters.map(character => ({
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      type: character.type,
      gender: character.gender,
      episodeCount: character.episode.length,
      episodeUrls: character.episode
    }));
  }
}
