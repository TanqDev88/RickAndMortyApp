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
  }
