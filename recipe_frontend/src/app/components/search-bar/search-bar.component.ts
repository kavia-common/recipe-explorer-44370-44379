import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <input
      class="input"
      type="text"
      placeholder="Search recipes..."
      (input)="onInput($event)"
      aria-label="Search recipes"
    />
  `,
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();

  onInput(e: any) {
    const value = e.target && e.target.value ? e.target.value : '';
    this.search.emit(value);
  }
}
