import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar'; // Import the navbar

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar], // Add NavbarComponent here
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'emerald-dynasty';
}
