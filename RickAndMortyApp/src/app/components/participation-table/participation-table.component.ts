import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character} from '../../models/character.model';
import { ApiResponse } from '../../models/apiResponse.model';

@Component({
  selector: 'app-participation-table',
  templateUrl: './participation-table.component.html',
  styleUrl: './participation-table.component.scss'
})
export class ParticipationTableComponent {
  characters: any[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
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
