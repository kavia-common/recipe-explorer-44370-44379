import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar">
      <span class="app-title">Recipe Explorer</span>
    </nav>
  `,
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {}
