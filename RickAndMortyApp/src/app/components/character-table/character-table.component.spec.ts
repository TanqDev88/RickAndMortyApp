import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CharacterTableComponent } from './character-table.component';
import { CharacterService } from '../../services/character.service';

describe('CharacterTableComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      declarations: [CharacterTableComponent],
      providers: [CharacterService]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CharacterTableComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

