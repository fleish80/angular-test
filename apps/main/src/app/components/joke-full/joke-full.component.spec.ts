import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JokeFullComponent } from './joke-full.component';

describe('JokeFullComponent', () => {
  let component: JokeFullComponent;
  let fixture: ComponentFixture<JokeFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JokeFullComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JokeFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
