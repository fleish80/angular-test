import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JokeStoreService } from '../../services/joke-store/joke-store.service';
import JokeComponent from './joke.component';

describe('JokeComponent', () => {
  let component: JokeComponent;
  let fixture: ComponentFixture<JokeComponent>;
 

  const mockJokeStoreService = {
    loading: signal(false),
    error: signal(null),
    loadJoke: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JokeComponent],
      providers: [
        {provide: JokeStoreService, useValue: mockJokeStoreService}
      ],
    });

    fixture = TestBed.createComponent(JokeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load joke', () => {
    component.loadJoke();
    expect(mockJokeStoreService.loadJoke).toHaveBeenCalledWith();
  });
});
