import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private charactersUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<ApiResponse<Character>> {
    return this.http.get<ApiResponse<Character>>(this.charactersUrl);
  }
}
