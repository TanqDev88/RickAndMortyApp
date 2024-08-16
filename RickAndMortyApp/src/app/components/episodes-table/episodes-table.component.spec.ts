import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EpisodesTableComponent } from './episodes-table.component';
import { CharacterService } from '../../services/character.service';

describe('EpisodesTableComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      declarations: [EpisodesTableComponent],
      providers: [CharacterService]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(EpisodesTableComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

