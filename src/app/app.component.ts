import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  username: string = "";

  getUserName(event: Event) {
    this.username = (event.target as HTMLInputElement).value;
  }

  setUserName() {
    this.username = 'Peter';
  }

  getUserNameWithTemplate(name: string) {
    this.username = name;
    console.log(name);
  }
}
