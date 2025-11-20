import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../models/recipe.model';
import { Router } from '@angular/router';
import { TagChipsComponent } from '../tag-chips/tag-chips.component';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [
    CommonModule,
    TagChipsComponent
  ],
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent {
  @Input() recipe!: Recipe;

  constructor(private router: Router) {}

  onCardClick() {
    if (this.recipe) {
      this.router.navigate(['/recipes', this.recipe.id]);
    }
  }
}
