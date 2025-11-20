import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card surface" style="max-width:420px; margin:2em auto; padding:2em; text-align:center;">
      <h2 style="color: var(--color-error);">404</h2>
      <p>Page not found.</p>
      <button class="button" (click)="back()">Back to Recipes</button>
    </div>
  `
})
export class NotFoundComponent {
  constructor(private router: Router) {}
  back() {
    this.router.navigate(['/']);
  }
}
