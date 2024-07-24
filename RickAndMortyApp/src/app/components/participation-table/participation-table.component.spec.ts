import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ParticipationTableComponent } from './participation-table.component';
import { CharacterService } from '../../services/character.service';

describe('ParticipationTableComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importar HttpClientTestingModule
      declarations: [ParticipationTableComponent],
      providers: [CharacterService]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ParticipationTableComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
