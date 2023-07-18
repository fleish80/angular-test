import { Component, inject } from '@angular/core';
import { JokeStoreService } from '../../services/joke-store/joke-store.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'df-joke-full',
  standalone: true,
  imports: [NgIf],
  template: ` {{ joke()!.value }} `,
  styles: [],
})
export class JokeFullComponent {
  #jokeStoreService = inject(JokeStoreService);
  joke = this.#jokeStoreService.joke;
  loadig = this.#jokeStoreService.loading;
}
