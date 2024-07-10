import { Component } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public characterReg: any;

  constructor(private characterService:CharacterService) {
    this.characterService.getCharacters().subscribe(
      responseData => {
          this.characterReg = responseData;
      }

    )
  }

}
