import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipe.model';

const MOCK_RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Lemon Chicken Piccata',
    description: 'Tender chicken finished in a bright lemon caper sauce. Restaurant-quality, made simple at home.',
    imageUrl: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=600',
    tags: ['Chicken', 'Dinner', 'Italian'],
    timeMinutes: 35,
    servings: 3,
    ingredients: [
      { name: 'Boneless skinless chicken breasts', quantity: '2', checked: false },
      { name: 'All-purpose flour', quantity: '1/4 cup', checked: false },
      { name: 'Lemon', quantity: '1', checked: false },
      { name: 'Capers', quantity: '2 tbsp', checked: false },
      { name: 'Unsalted butter', quantity: '3 tbsp', checked: false },
      { name: 'Olive oil', quantity: '2 tbsp', checked: false },
      { name: 'Chicken broth', quantity: '1/2 cup', checked: false },
      { name: 'Salt & pepper', quantity: 'to taste', checked: false }
    ],
    steps: [
      'Slice chicken breasts in half lengthwise and gently flatten.',
      'Dredge in flour, shaking off excess.',
      'Sauté chicken in olive oil & butter until golden on both sides; set aside.',
      'Deglaze pan with broth, add lemon juice and capers. Simmer briefly.',
      'Return chicken to pan; warm through and coat in sauce.'
    ]
  },
  {
    id: '2',
    title: 'Spaghetti Carbonara',
    description: 'Classic Roman pasta with pancetta & pecorino. Creamy, rich, and made in minutes.',
    imageUrl: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&w=600',
    tags: ['Pasta', 'Dinner', 'Italian', 'Quick'],
    timeMinutes: 25,
    servings: 2,
    ingredients: [
      { name: 'Spaghetti', quantity: '200g', checked: false },
      { name: 'Egg yolks', quantity: '2', checked: false },
      { name: 'Pancetta (or guanciale)', quantity: '60g', checked: false },
      { name: 'Pecorino Romano (grated)', quantity: '40g', checked: false },
      { name: 'Freshly ground black pepper', quantity: 'to taste', checked: false }
    ],
    steps: [
      'Cook the spaghetti until al dente.',
      'Fry pancetta in a pan until crisp, reserving fat.',
      'Whisk egg yolks and pecorino in a bowl.',
      'Drain spaghetti, saving some pasta water.',
      'Quickly mix hot pasta with egg-cheese mixture, pancetta, fat, and pepper to create a creamy sauce. (No heat!)'
    ]
  },
  {
    id: '3',
    title: 'Vegetarian Buddha Bowl',
    description: 'A nourishing bowl loaded with roasted veg, grains, and a creamy tahini drizzle.',
    imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&w=600',
    tags: ['Vegetarian', 'Healthy', 'Lunch', 'Gluten-Free'],
    timeMinutes: 30,
    servings: 2,
    ingredients: [
      { name: 'Cooked brown rice or quinoa', quantity: '1 cup', checked: false },
      { name: 'Chickpeas, rinsed and drained', quantity: '1/2 can', checked: false },
      { name: 'Sweet potato, cubed', quantity: '1 small', checked: false },
      { name: 'Broccoli florets', quantity: '1 cup', checked: false },
      { name: 'Red cabbage, sliced', quantity: '1/2 cup', checked: false },
      { name: 'Avocado, sliced', quantity: '1/2', checked: false },
      { name: 'Tahini dressing', quantity: 'as needed', checked: false }
    ],
    steps: [
      'Roast sweet potato and broccoli with olive oil, salt, and pepper until golden.',
      'Warm chickpeas in a pan (optional).',
      'Arrange cooked grain in a bowl. Top with veggies, chickpeas, cabbage, and avocado.',
      'Drizzle with tahini sauce and serve.'
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
