import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CharacterService } from './character.service';

describe('CharacterService', () => {
  let service: CharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importar HttpClientTestingModule
      providers: [CharacterService]
    });
    service = TestBed.inject(CharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
