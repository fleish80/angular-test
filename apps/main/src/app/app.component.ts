import { Component } from '@angular/core';
import { JokeFullComponent } from './components/joke-full/joke-full.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'df-root',
  imports: [JokeFullComponent, RouterOutlet, RouterLink],
  template: ` <nav class="nav">
      <a routerLink="/joke">Joke</a>
    </nav>
    <router-outlet />`,
  styles: [
    `
      .nav {
        display: flex;
        gap: 10px;
        margin-block-end: 10px;
      }
    `,
  ],
})
export class AppComponent {
}
