import { TestBed } from '@angular/core/testing';

import { HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { JokeService } from '../joke/joke.service';
import { JokeStoreService } from './joke-store.service';

describe('JokeStoreService', () => {
  let service: JokeStoreService;
  const mockJokeService = {
    getJoke: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: JokeService, useValue: mockJokeService }],
    });
  });


  it('should load joke', () => {
    mockJokeService.getJoke.mockReturnValue(of({ value: 'Some Joke' }));
    service = TestBed.inject(JokeStoreService);
    expect(service.joke()).toEqual({ value: 'Some Joke' });
    expect(service.error()).toBe(null);
    expect(service.loading()).toBe(false);
    expect(service.loaded()).toBe(true);
  });

  it('should not load joke - error', () => {
    const httpError = new HttpErrorResponse({status: 500, statusText: 'Some server error'});

    mockJokeService.getJoke.mockReturnValue(throwError(() => httpError));
    service = TestBed.inject(JokeStoreService);
    expect(service.joke()).toBe(null);
    expect(service.error()).toEqual(httpError);
    expect(service.loading()).toBe(false);
    expect(service.loaded()).toBe(true);
  });
});
