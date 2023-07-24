import { TestBed } from '@angular/core/testing';

import { JOKE_URL, JokeService } from './joke.service';
import { HttpErrorResponse, provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('JokeService', () => {
  let service: JokeService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(JokeService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return joke', (done) => {

    service.getJoke().subscribe((joke => {
      expect(joke).toEqual({value: 'some joke'});
      done();
    }));

    const req = httpTestingController.expectOne({
      method: 'GET',
      url: JOKE_URL,
    });

    req.flush({value: 'some joke'});

  });

  it('should return error', (done) => {

    const httpError = new HttpErrorResponse({status: 500, statusText: 'Some server error'});


    service.getJoke().subscribe({
      error: (error: HttpErrorResponse) => {
        expect(error.statusText).toBe('Some server error');
        expect(error.url).toBe(JOKE_URL);
        expect(error.status).toBe(500);
        done();
      }
    });

    const req = httpTestingController.expectOne({
      method: 'GET',
      url: JOKE_URL,
    });

    req.flush('Error', httpError);

  });
});
