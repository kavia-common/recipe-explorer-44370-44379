import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagChipsComponent } from '../tag-chips/tag-chips.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, TagChipsComponent, FormsModule],
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  recipe?: Recipe;
  notFound = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipeService.getRecipeById(id).subscribe(
        (r) => {
          if (!r) this.notFound = true;
          this.recipe = r;
        },
        () => { this.notFound = true; }
      );
    } else {
      this.notFound = true;
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

  toggleIngredient(ingredient: any) {
    if (ingredient.checked !== undefined) ingredient.checked = !ingredient.checked;
  }
}
