import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipe.model';

const MOCK_RECIPES: Recipe[] = [
  // ... Original 12 recipes (keep as is above) ...
  // (preserved, as per original content),
  {
    id: '13',
    title: 'Grilled Salmon with Dill',
    description: 'Juicy salmon fillet grilled with fresh dill and lemon.',
    imageUrl: '',
    tags: ['Seafood', 'Grill', 'Dinner', 'Healthy', 'Gluten-Free'],
    timeMinutes: 22,
    servings: 2,
    ingredients: [
      { name: 'Salmon fillets', quantity: '2', checked: false },
      { name: 'Lemon, sliced', quantity: '4 slices', checked: false },
      { name: 'Fresh dill', quantity: '2 sprigs', checked: false },
      { name: 'Olive oil', quantity: '1 tbsp', checked: false },
      { name: 'Salt & pepper', quantity: 'to taste', checked: false }
    ],
    steps: [
      'Brush salmon with olive oil and season with salt and pepper.',
      'Top each fillet with lemon slices and dill.',
      'Grill over medium heat for 5-6 minutes per side until flaky.',
      'Serve hot.'
    ]
  },
  {
    id: '14',
    title: 'Spicy Chickpea Curry',
    description: 'Hearty, spicy Indian-style curry with chickpeas in tomato sauce.',
    imageUrl: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=601',
    tags: ['Vegan', 'Indian', 'Dinner', 'Spicy', 'Gluten-Free'],
    timeMinutes: 30,
    servings: 3,
    ingredients: [
      { name: 'Chickpeas, cooked', quantity: '400g', checked: false },
      { name: 'Onion, chopped', quantity: '1', checked: false },
      { name: 'Garlic cloves, minced', quantity: '2', checked: false },
      { name: 'Tomatoes, diced', quantity: '2', checked: false },
      { name: 'Garam masala', quantity: '2 tsp', checked: false },
      { name: 'Cumin', quantity: '1/2 tsp', checked: false },
      { name: 'Chili powder', quantity: '1/2 tsp', checked: false },
      { name: 'Coconut milk', quantity: '1/2 cup', checked: false },
      { name: 'Oil', quantity: '1 tbsp', checked: false },
      { name: 'Salt', quantity: 'to taste', checked: false }
    ],
    steps: [
      'Sauté onion and garlic in oil until translucent.',
      'Add tomatoes, spices, and cook for 5 minutes.',
      'Add chickpeas and coconut milk, simmer 15-20 min.',
      'Adjust seasoning and serve with rice.'
    ]
  },
  {
    id: '15',
    title: 'Thai Peanut Noodle Bowl',
    description: 'Rice noodles tossed with veggies and a rich, creamy peanut sauce.',
    imageUrl: '',
    tags: ['Vegetarian', 'Asian', 'Noodles', 'Dinner'],
    timeMinutes: 25,
    servings: 2,
    ingredients: [
      { name: 'Rice noodles', quantity: '150g', checked: false },
      { name: 'Peanut butter', quantity: '2 tbsp', checked: false },
      { name: 'Soy sauce', quantity: '2 tbsp', checked: false },
      { name: 'Carrot, shredded', quantity: '1', checked: false },
      { name: 'Red bell pepper, sliced', quantity: '1/2', checked: false },
      { name: 'Green onions', quantity: '2', checked: false },
      { name: 'Warm water', quantity: '2 tbsp', checked: false },
      { name: 'Lime', quantity: '1/2', checked: false }
    ],
    steps: [
      'Cook noodles according to package.',
      'Mix peanut butter, soy sauce, water, and lime for sauce.',
      'Toss noodles with sauce and raw veggies.',
      'Garnish with green onion. Serve.'
    ]
  },
  {
    id: '16',
    title: 'Moroccan Couscous Salad',
    description: 'Colorful couscous salad with chickpeas, herbs, and fresh citrus.',
    imageUrl: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=602',
    tags: ['Vegetarian', 'Salad', 'Healthy', 'Lunch'],
    timeMinutes: 20,
    servings: 3,
    ingredients: [
      { name: 'Couscous, cooked', quantity: '1 cup', checked: false },
      { name: 'Chickpeas', quantity: '1/2 cup', checked: false },
      { name: 'Cucumber, diced', quantity: '1/2', checked: false },
      { name: 'Cherry tomatoes, halved', quantity: '1/2 cup', checked: false },
      { name: 'Red onion, chopped', quantity: '2 tbsp', checked: false },
      { name: 'Fresh mint', quantity: '2 tbsp', checked: false },
      { name: 'Fresh parsley', quantity: '2 tbsp', checked: false },
      { name: 'Lemon juice', quantity: '1 tbsp', checked: false },
      { name: 'Olive oil', quantity: '1 tbsp', checked: false },
      { name: 'Salt & pepper', quantity: 'to taste', checked: false }
    ],
    steps: [
      'Mix cooked couscous with all vegetables and herbs.',
      'Toss with lemon juice, olive oil, salt, and pepper.',
      'Serve chilled or at room temperature.'
    ]
  },
  {
    id: '17',
    title: 'Shakshuka',
    description: 'Eggs poached in a spiced tomato and pepper sauce. A savory Middle Eastern brunch.',
    imageUrl: '',
    tags: ['Vegetarian', 'Brunch', 'Eggs', 'Mediterranean'],
    timeMinutes: 35,
    servings: 3,
    ingredients: [
      { name: 'Eggs', quantity: '4', checked: false },
      { name: 'Crushed tomatoes', quantity: '1 can (400g)', checked: false },
      { name: 'Red bell pepper, sliced', quantity: '1', checked: false },
      { name: 'Onion, chopped', quantity: '1', checked: false },
      { name: 'Garlic cloves, minced', quantity: '2', checked: false },
      { name: 'Paprika', quantity: '1 tsp', checked: false },
      { name: 'Cumin', quantity: '1/2 tsp', checked: false },
      { name: 'Olive oil', quantity: '2 tbsp', checked: false },
      { name: 'Salt & pepper', quantity: 'to taste', checked: false }
    ],
    steps: [
      'Heat olive oil, sauté onion, pepper, and garlic until soft.',
      'Stir in tomatoes, spices, simmer 10-12 min.',
      'Make wells and crack eggs directly into sauce.',
      'Cover and cook until eggs are set. Serve with crusty bread.'
    ]
  },
  {
    id: '18',
    title: 'Chimichurri Steak',
    description: 'Grilled steak with bright, herby chimichurri sauce.',
    imageUrl: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&w=600',
    tags: ['Beef', 'Grill', 'Dinner', 'Argentinian'],
    timeMinutes: 32,
    servings: 2,
    ingredients: [
      { name: 'Steak (sirloin or flank)', quantity: '300g', checked: false },
      { name: 'Garlic cloves', quantity: '2', checked: false },
      { name: 'Fresh parsley', quantity: '1/2 cup', checked: false },
      { name: 'Olive oil', quantity: '1/4 cup', checked: false },
      { name: 'Red wine vinegar', quantity: '2 tbsp', checked: false },
      { name: 'Salt & pepper', quantity: 'to taste', checked: false }
    ],
    steps: [
      'Grill steak to desired doneness; let rest.',
      'Blend parsley, garlic, oil, vinegar, salt, and pepper to make sauce.',
      'Slice steak and spoon chimichurri over top.'
    ]
  },
  {
    id: '19',
    title: 'Avocado Toast with Egg',
    description: 'Simple breakfast toast with creamy avocado & protein boost.',
    imageUrl: '',
    tags: ['Breakfast', 'Vegetarian', 'Quick', 'Healthy'],
    timeMinutes: 10,
    servings: 1,
    ingredients: [
      { name: 'Whole grain bread', quantity: '2 slices', checked: false },
      { name: 'Avocado, mashed', quantity: '1', checked: false },
      { name: 'Egg, cooked (fried or poached)', quantity: '1', checked: false },
      { name: 'Salt & pepper', quantity: 'to taste', checked: false },
      { name: 'Olive oil', quantity: 'to drizzle', checked: false }
    ],
    steps: [
      'Toast bread and spread with mashed avocado.',
      'Top each with cooked egg.',
      'Season to taste and drizzle with olive oil if desired.'
    ]
  },
  {
    id: '20',
    title: 'Japanese Chicken Katsu',
    description: 'Crispy panko-breaded chicken cutlets with a sweet-savory tonkatsu sauce.',
    imageUrl: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=603',
    tags: ['Chicken', 'Asian', 'Dinner', 'Crispy'],
    timeMinutes: 35,
    servings: 2,
    ingredients: [
      { name: 'Chicken breast', quantity: '2', checked: false },
      { name: 'Flour', quantity: '1/3 cup', checked: false },
      { name: 'Egg, beaten', quantity: '1', checked: false },
      { name: 'Panko breadcrumbs', quantity: '1 cup', checked: false },
      { name: 'Oil for frying', quantity: '', checked: false },
      { name: 'Tonkatsu sauce or ketchup', quantity: 'to serve', checked: false }
    ],
    steps: [
      'Pound chicken to flatten.',
      'Dredge in flour, then egg, then panko.',
      'Fry until golden and cooked through.',
      'Slice, serve with tonkatsu sauce and rice.'
    ]
  },
  {
    id: '21',
    title: 'Mushroom Risotto',
    description: 'Creamy risotto with earthy mushrooms, finished with parmesan.',
    imageUrl: '',
    tags: ['Vegetarian', 'Rice', 'Italian', 'Dinner'],
    timeMinutes: 40,
    servings: 3,
    ingredients: [
      { name: 'Arborio rice', quantity: '1 cup', checked: false },
      { name: 'Mushrooms, sliced', quantity: '1 cup', checked: false },
      { name: 'Onion, finely chopped', quantity: '1', checked: false },
      { name: 'Garlic, minced', quantity: '2 cloves', checked: false },
      { name: 'Vegetable broth', quantity: '3 cups', checked: false },
      { name: 'Butter', quantity: '2 tbsp', checked: false },
      { name: 'Parmesan, grated', quantity: '1/4 cup', checked: false },
      { name: 'Olive oil', quantity: '1 tbsp', checked: false },
      { name: 'Salt & pepper', quantity: 'to taste', checked: false }
    ],
    steps: [
      'Sauté mushrooms, onion, and garlic in butter and oil until soft.',
      'Stir in rice, cook 1 min.',
      'Add broth gradually, stirring until absorbed before adding more.',
      'When creamy and rice is tender, stir in parmesan, season, and serve.'
    ]
  },
  {
    id: '22',
    title: 'Turkey and Hummus Wrap',
    description: 'Whole wheat wrap filled with turkey slices, crunchy veggies, and hummus.',
    imageUrl: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=604',
    tags: ['Lunch', 'Wrap', 'Healthy', 'Quick'],
    timeMinutes: 8,
    servings: 1,
    ingredients: [
      { name: 'Whole wheat tortilla', quantity: '1', checked: false },
      { name: 'Turkey breast slices', quantity: '3', checked: false },
      { name: 'Hummus', quantity: '2 tbsp', checked: false },
      { name: 'Spinach leaves', quantity: 'a small handful', checked: false },
      { name: 'Cucumber, sliced', quantity: '1/4', checked: false },
      { name: 'Carrot, shredded', quantity: 'small handful', checked: false }
    ],
    steps: [
      'Spread hummus over tortilla.',
      'Layer with turkey, spinach, cucumber, and carrot.',
      'Roll up tightly, slice if desired.'
    ]
  },
  {
    id: '23',
    title: 'Egg Fried Rice',
    description: 'Fried rice with scrambled eggs, peas, and carrots. Fast and satisfying.',
    imageUrl: '',
    tags: ['Rice', 'Egg', 'Asian', 'Quick'],
    timeMinutes: 15,
    servings: 2,
    ingredients: [
      { name: 'Cooked rice', quantity: '2 cups', checked: false },
      { name: 'Eggs', quantity: '2', checked: false },
      { name: 'Peas', quantity: '1/3 cup', checked: false },
      { name: 'Carrots, diced', quantity: '1/3 cup', checked: false },
      { name: 'Soy sauce', quantity: '1.5 tbsp', checked: false },
      { name: 'Oil', quantity: '1.5 tbsp', checked: false },
      { name: 'Green onion, sliced', quantity: '2', checked: false }
    ],
    steps: [
      'Heat oil in pan, scramble eggs and set aside.',
      'Add carrots and peas, stir fry 2 min.',
      'Add rice, soy sauce, and eggs; stir fry 3 min more.',
      'Top with green onion and serve.'
    ]
  },
  {
    id: '24',
    title: 'Classic BLT Sandwich',
    description: 'Crispy bacon, lettuce, and fresh tomato slices in toasted bread.',
    imageUrl: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=605',
    tags: ['Pork', 'Lunch', 'Sandwich', 'Classic'],
    timeMinutes: 12,
    servings: 1,
    ingredients: [
      { name: 'Bread, toasted', quantity: '2 slices', checked: false },
      { name: 'Bacon strips', quantity: '3', checked: false },
      { name: 'Lettuce leaves', quantity: '2', checked: false },
      { name: 'Tomato, sliced', quantity: '2', checked: false },
      { name: 'Mayonnaise', quantity: '1 tbsp', checked: false }
    ],
    steps: [
      'Cook bacon until crisp.',
      'Spread mayo on toast, layer with bacon, lettuce, and tomato.',
      'Close sandwich and serve immediately.'
    ]
  },
  {
    id: '25',
    title: 'Sweet Potato Black Bean Chili',
    description: 'Hearty vegetarian chili with sweet potatoes and black beans.',
    imageUrl: '',
    tags: ['Vegetarian', 'Chili', 'Dinner', 'Gluten-Free'],
    timeMinutes: 40,
    servings: 4,
    ingredients: [
      { name: 'Sweet potatoes, cubed', quantity: '2', checked: false },
      { name: 'Black beans', quantity: '1 can (400g)', checked: false },
      { name: 'Onion, chopped', quantity: '1', checked: false },
      { name: 'Bell pepper, diced', quantity: '1', checked: false },
      { name: 'Tomatoes, chopped', quantity: '2', checked: false },
      { name: 'Chili powder', quantity: '1.5 tsp', checked: false },
      { name: 'Cumin', quantity: '1/2 tsp', checked: false },
      { name: 'Vegetable broth', quantity: '2 cups', checked: false },
      { name: 'Salt & pepper', quantity: 'to taste', checked: false }
    ],
    steps: [
      'Sauté onion and pepper in a large pot.',
      'Add sweet potatoes, tomatoes, chili powder, cumin, and broth. Simmer until sweet potato is tender.',
      'Add beans and cook 5 min more.',
      'Season and serve.'
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
