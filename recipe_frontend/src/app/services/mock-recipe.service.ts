import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipe.model';

const MOCK_RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Lemon Chicken Piccata',
    description: 'Chicken sautéed and finished in a lemony caper sauce.',
    imageUrl: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=600',
    tags: ['Chicken', 'Dinner', 'Italian'],
    timeMinutes: 35,
    servings: 3,
    ingredients: [
      { name: 'Chicken breast', quantity: '2', checked: false },
      { name: 'Lemon', quantity: '1', checked: false },
      { name: 'Capers', quantity: '2 tbsp', checked: false },
      { name: 'Butter', quantity: '3 tbsp', checked: false }
    ],
    steps: [
      'Flatten chicken and season.',
      'Sauté chicken until golden; remove.',
      'Deglaze pan, add lemon and capers.',
      'Return chicken to sauce to finish.'
    ]
  },
  {
    id: '2',
    title: 'Spaghetti Carbonara',
    description: 'Classic creamy pasta with pancetta and pecorino cheese.',
    imageUrl: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&w=600',
    tags: ['Pasta', 'Dinner', 'Quick'],
    timeMinutes: 25,
    servings: 2,
    ingredients: [
      { name: 'Spaghetti', quantity: '200g', checked: false },
      { name: 'Eggs', quantity: '2', checked: false },
      { name: 'Pancetta', quantity: '60g', checked: false },
      { name: 'Pecorino cheese', quantity: '40g', checked: false }
    ],
    steps: [
      'Cook the spaghetti.',
      'Fry pancetta until crisp.',
      'Mix eggs and cheese.',
      'Combine all off heat for creamy sauce.'
    ]
  }
];

@Injectable({
  providedIn: 'root',
})
export class MockRecipeService {
  private data: Recipe[] = MOCK_RECIPES;

  // PUBLIC_INTERFACE
  listRecipes() {
    return of(this.data);
  }

  // PUBLIC_INTERFACE
  getRecipeById(id: string) {
    return of(this.data.find(r => r.id === id));
  }
}
