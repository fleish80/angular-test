import { ComponentFixture, TestBed } from '@angular/core/testing';
import JokeComponent from './joke.component';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('JokeComponent', () => {
  let component: JokeComponent;
  let fixture: ComponentFixture<JokeComponent>;
  let httpTestingController: HttpTestingController;
  let componentDebugElm: DebugElement;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JokeComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(JokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    httpTestingController = TestBed.inject(HttpTestingController);
    componentDebugElm = fixture.debugElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should test getDataV1', () => {
    const url = 'https://api.chucknorris.io/jokes/random';

    const req = httpTestingController.expectOne({
      method: 'GET',
      url,
    });

    req.flush({value: 'some joke'});

    fixture.detectChanges();

    const fullJoke = componentDebugElm.query(By.css('df-joke-full'));
    expect(fullJoke.nativeElement.textContent.trim()).toBe('some joke');
  });

});
