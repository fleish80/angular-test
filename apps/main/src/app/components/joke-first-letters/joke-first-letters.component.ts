import { Component, inject } from '@angular/core';
import { FirstLettersPipe } from '../../pipes/first-letters/first-letters.pipe';
import { JokeStoreService } from '../../services/joke-store/joke-store.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'df-joke-first-letters',
  standalone: true,
  template: `
    <ng-container *ngIf="show">{{ joke()!.value | firstLetters }}</ng-container>
    <button (click)="toggleLetters()">Toggle Letters</button>
  `,
  styles: [],
  imports: [FirstLettersPipe, NgIf],
})
export class JokeFirstLettersComponent {
  #jokeStoreService = inject(JokeStoreService);
  joke = this.#jokeStoreService.joke;
  show = true;

  toggleLetters() {
    this.show = !this.show;
  }
}
