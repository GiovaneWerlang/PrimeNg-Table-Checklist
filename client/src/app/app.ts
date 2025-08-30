import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { List } from "../components/list/list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, List],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('check-list');
}
