import { ComponentFixture, TestBed } from '@angular/core/testing';
import JokeComponent from './joke.component';
import { HttpErrorResponse, provideHttpClient } from '@angular/common/http';
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


  it('should check initial data', () => {
    const url = 'https://api.chucknorris.io/jokes/random';

    const req = httpTestingController.expectOne({
      method: 'GET',
      url,
    });

    req.flush({value: 'some joke'});

    fixture.detectChanges();

    const fullJoke = componentDebugElm.query(By.css('df-joke-full'));
    expect(fullJoke.nativeElement.textContent).toContain('some joke');

    const lettersJoke = componentDebugElm.query(By.css('df-joke-first-letters'));
    expect(lettersJoke.nativeElement.textContent).toContain('s,j');
  });

  it('should check load another joke', () => {
    const url = 'https://api.chucknorris.io/jokes/random';

    const req0 = httpTestingController.expectOne({
      method: 'GET',
      url,
    });

    req0.flush({value: 'some joke'});

    fixture.detectChanges();

    const loadButton = componentDebugElm.query(By.css('.load-joke-btn')).nativeElement;
    loadButton.click();

    const req1 = httpTestingController.expectOne({
      method: 'GET',
      url,
    });

    req1.flush({value: 'another joke'});

    
    fixture.detectChanges();
    const fullJoke = componentDebugElm.query(By.css('df-joke-full'));
    expect(fullJoke.nativeElement.textContent).toContain('another joke');

    const lettersJoke = componentDebugElm.query(By.css('df-joke-first-letters'));
    expect(lettersJoke.nativeElement.textContent).toContain('a,j');
  });

  it('should toggle joke first letters', () => {
    const url = 'https://api.chucknorris.io/jokes/random';

    const req = httpTestingController.expectOne({
      method: 'GET',
      url,
    });

    req.flush({value: 'some joke'});

    fixture.detectChanges();

    const lettersJoke = componentDebugElm.query(By.css('df-joke-first-letters'));
    expect(lettersJoke.nativeElement.textContent).toContain('s,j');

    const toggleButton = lettersJoke.query(By.css('button'));
    toggleButton.nativeElement.click();

    fixture.detectChanges();
    expect(lettersJoke.nativeElement.textContent).not.toContain('s,j');

  });

  it('should dispay error', () => {
    const url = 'https://api.chucknorris.io/jokes/random';
    const error = new HttpErrorResponse({status: 500, statusText: 'Some server error'});

    const req = httpTestingController.expectOne({
      method: 'GET',
      url,
    });

    req.flush('Error', error);

    fixture.detectChanges();

    expect(componentDebugElm.nativeElement.textContent).toContain('Some server error');

  });


});
