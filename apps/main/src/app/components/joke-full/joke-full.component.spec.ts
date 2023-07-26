import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JokeFullComponent } from './joke-full.component';
import { signal } from '@angular/core';
import { JokeStoreService } from '../../services/joke-store/joke-store.service';

describe('JokeFullComponent', () => {
  let component: JokeFullComponent;
  let fixture: ComponentFixture<JokeFullComponent>;

  const mockJokeStoreService = {
    joke: signal('some joke'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JokeFullComponent],
      providers: [{provide: JokeStoreService, useValue: mockJokeStoreService}],
    }).compileComponents();

    fixture = TestBed.createComponent(JokeFullComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
