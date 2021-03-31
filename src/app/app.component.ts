import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // injection point
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularCrashy'; // only var
  date = new Date();
  name: string = 'seth';
}
