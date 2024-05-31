import { Component } from '@angular/core';

@Component({
  selector: 'app-character-table',
  standalone: true,
  imports: [],
  templateUrl: './character-table.component.html',
  styleUrl: './character-table.component.scss'
})
export class CharacterTableComponent implements OnInit {
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
}
