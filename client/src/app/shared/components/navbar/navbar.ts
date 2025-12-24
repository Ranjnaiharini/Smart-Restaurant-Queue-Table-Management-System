import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="nav">
      <a routerLink="/tables">Tables</a>
      <a routerLink="/queue">Queue</a>
      <a routerLink="/reservation">Reservation</a>
      <a routerLink="/manager/dashboard">Manager</a>
    </nav>
  `,
  styles: [`.nav { display:flex; gap:12px; padding:8px; } .nav a{ text-decoration:none }`]
})
export class Navbar {}

