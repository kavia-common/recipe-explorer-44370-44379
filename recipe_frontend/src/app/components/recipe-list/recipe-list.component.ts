import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { TagChipsComponent } from '../tag-chips/tag-chips.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    CommonModule,
    TagChipsComponent,
    SearchBarComponent,
    RecipeCardComponent
  ],
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [];
  filtered: Recipe[] = [];
  searchTerm = '';
  selectedTags: Set<string> = new Set();
  allTags: string[] = [];

  constructor(private recipeService: RecipeService) {
    this.recipeService.listRecipes().subscribe(data => {
      this.recipes = data;
      this.allTags = [...new Set(this.recipes.flatMap(r => r.tags))];
      this.applyFilter();
    });
  }

  onSearch(term: string) {
    this.searchTerm = term;
    this.applyFilter();
  }

  onTagToggle(tag: string) {
    if (this.selectedTags.has(tag)) {
      this.selectedTags.delete(tag);
    } else {
      this.selectedTags.add(tag);
    }
    this.applyFilter();
  }

  applyFilter() {
    this.filtered = this.recipes.filter(recipe => {
      const matchesSearch = !this.searchTerm ||
        recipe.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesTags = this.selectedTags.size === 0 ||
        recipe.tags.some(t => this.selectedTags.has(t));
      return matchesSearch && matchesTags;
    });
  }
}
