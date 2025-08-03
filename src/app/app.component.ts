import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export enum Action {
  Increment,
  Decrement,
  Reset,
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  Action = Action; // expose enum to template

  count: number = 0;

  handleCounter(action: Action) {
    switch (action) {
      case Action.Increment:
        this.count++;
        break;
      case Action.Decrement:
        if (this.count > 0) this.count--;
        break;
      case Action.Reset:
        this.count = 0;
        break;
    }
  }
}
