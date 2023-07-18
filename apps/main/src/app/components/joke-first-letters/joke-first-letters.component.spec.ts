import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JokeFirstLettersComponent } from './joke-first-letters.component';

describe('JokeFirstLettersComponent', () => {
  let component: JokeFirstLettersComponent;
  let fixture: ComponentFixture<JokeFirstLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JokeFirstLettersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JokeFirstLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
