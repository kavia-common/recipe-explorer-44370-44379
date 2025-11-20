import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tag-chips',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span *ngFor="let tag of tags" 
      class="chip" 
      [class.selected]="isSelected(tag)"
      (click)="toggleTag(tag)">
      {{ tag }}
    </span>
  `,
  styleUrls: ['./tag-chips.component.css']
})
export class TagChipsComponent {
  @Input() tags: string[] = [];
  @Input() selectedTags?: Set<string> = new Set();
  @Output() toggle = new EventEmitter<string>();

  isSelected(tag: string): boolean {
    return !!this.selectedTags && this.selectedTags.has(tag);
  }

  toggleTag(tag: string) {
    this.toggle.emit(tag);
  }
}
