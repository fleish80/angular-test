import { HttpErrorResponse } from '@angular/common/http';
import {
  computed,
  inject,
  Injectable
} from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import {
  switchMap,
  tap
} from 'rxjs/operators';
import { Joke } from '../../models/joke.model';
import { equal } from '../../utils/equal.util';
import { JokeService } from '../joke/joke.service';

interface State {
  joke: Joke | null;
  error: HttpErrorResponse | null;
  loading: boolean;
  loaded: boolean;
}

@Injectable({ providedIn: 'root' })
export class JokeStoreService extends ComponentStore<State> {
  #jokeService = inject(JokeService);

  constructor() {
    super({
      joke: null,
      error: null,
      loading: false,
      loaded: false,
    });
    this.loadJoke();
  }

  readonly joke = computed(() => this.state().joke, { equal });
  readonly error = computed(() => this.state().error, { equal });
  readonly loading = computed(() => this.state().loading, { equal });
  readonly loaded = computed(() => this.state().loaded, { equal });

  readonly loadJoke = this.effect((trigger$: Observable<void>) => {
    return trigger$.pipe(
      tap(() => this.patchState({ loading: true })),
      // 👇 Handle race condition with the proper choice of the flattening operator.
      switchMap(() =>
        this.#jokeService.getJoke().pipe(
          //👇 Act on the result within inner pipe.
          tapResponse({
            next: (joke) =>
              this.patchState({
                joke,
                error: null,
                loading: false,
                loaded: true,
              }),
            error: (error: HttpErrorResponse) =>
              this.patchState({
                joke: null,
                error,
                loading: false,
                loaded: true,
              }),
          })
        )
      )
    );
  });
}
