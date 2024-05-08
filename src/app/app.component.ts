import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NO_ERRORS_SCHEMA} from '@angular/core'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-job-search';
}
