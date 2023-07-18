import { Component, inject } from '@angular/core';
import { JokeFullComponent } from '../joke-full/joke-full.component';
import { JokeStoreService } from '../../services/joke-store/joke-store.service';
import { JokeFirstLettersComponent } from '../joke-first-letters/joke-first-letters.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'df-joke',
  standalone: true,
  template: `
    <button class="load-joke-btn" (click)="loadJoke()">Load joke</button>
    <ng-container *ngIf="loading(); else jokeTmpl"> Loading... </ng-container>
    <ng-template #jokeTmpl>
      <df-joke-full />
      <df-joke-first-letters />
    </ng-template>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
      }
      .load-joke-btn {
        width: fit-content;
      }
    `,
  ],
  imports: [JokeFullComponent, JokeFirstLettersComponent, NgIf],
})
export default class JokeComponent {
  #jokeStoreService = inject(JokeStoreService);
  loading = this.#jokeStoreService.loading;

  loadJoke() {
    this.#jokeStoreService.loadJoke();
  }
}
