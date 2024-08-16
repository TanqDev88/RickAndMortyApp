import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';
import { ApiResponse } from '../models/apiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private charactersUrl = 'https://rickandmortyapi.com/api/character'; 

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<ApiResponse<Character>> {
    return this.http.get<ApiResponse<Character>>(this.charactersUrl);
  }

  getCharacterById(id: number): Observable<Character> {
    const url = `${this.charactersUrl}/${id}`;
    return this.http.get<Character>(url);
  }

  searchCharacters(name: string): Observable<ApiResponse<Character>> {
    const url = `${this.charactersUrl}/?name=${name}`;
    return this.http.get<ApiResponse<Character>>(url);
  }
}
