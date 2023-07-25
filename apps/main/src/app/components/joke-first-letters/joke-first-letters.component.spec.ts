import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JokeFirstLettersComponent } from './joke-first-letters.component';
import { signal } from '@angular/core';
import { JokeStoreService } from '../../services/joke-store/joke-store.service';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('JokeFirstLettersComponent', () => {
  let component: JokeFirstLettersComponent;
  let fixture: ComponentFixture<JokeFirstLettersComponent>;

  const mockJokeStoreService = {
    joke: signal('some joke'),
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [JokeFirstLettersComponent],
      providers: [{provide: JokeStoreService, useValue: mockJokeStoreService}],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(JokeFirstLettersComponent);
    component = fixture.componentInstance;
  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle letters', () => {
    expect(component.show).toBe(true);
    component.toggleLetters();
    expect(component.show).toBe(false);
    component.toggleLetters();
    expect(component.show).toBe(true);
  });
});
