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
  },
  {
    id: '4',
    title: 'Classic Beef Stew',
    description: 'Hearty beef stew with root vegetables simmered to perfection.',
    imageUrl: 'https://images.pexels.com/photos/5938/food-pot-kitchen-cooking.jpg?auto=compress&w=600',
    tags: ['Dinner', 'Beef', 'Comfort', 'Gluten-Free'],
    timeMinutes: 120,
    servings: 5,
    ingredients: [
      { name: 'Beef chuck, cubed', quantity: '600g', checked: false },
      { name: 'Carrots, sliced', quantity: '2', checked: false },
      { name: 'Potatoes, cubed', quantity: '2', checked: false },
      { name: 'Onion, chopped', quantity: '1', checked: false },
      { name: 'Beef broth', quantity: '3 cups', checked: false },
      { name: 'Tomato paste', quantity: '2 tbsp', checked: false },
      { name: 'Bay leaf', quantity: '1', checked: false },
      { name: 'Salt & pepper', quantity: 'to taste', checked: false }
    ],
    steps: [
      'Brown beef in a large pot, then set aside.',
      'Sauté onions, carrots, and potatoes until lightly golden.',
      'Stir in tomato paste and cook for 1 minute.',
      'Add beef, broth, bay leaf, salt and pepper.',
      'Simmer on low, covered, for 90 minutes or until beef is tender.'
    ]
  },
  {
    id: '5',
    title: 'Gluten-Free Banana Pancakes',
    description: 'Fluffy pancakes made with sweet ripe banana and almond flour. Gluten-free breakfast treat!',
    imageUrl: '',
    tags: ['Breakfast', 'Dessert', 'Gluten-Free', 'Vegetarian'],
    timeMinutes: 20,
    servings: 2,
    ingredients: [
      { name: 'Banana, mashed', quantity: '1', checked: false },
      { name: 'Eggs', quantity: '2', checked: false },
      { name: 'Almond flour', quantity: '1/4 cup', checked: false },
      { name: 'Baking powder', quantity: '1/2 tsp', checked: false },
      { name: 'Salt', quantity: 'pinch', checked: false },
      { name: 'Butter or oil for frying', quantity: '', checked: false }
    ],
    steps: [
      'Whisk together banana, eggs, almond flour, baking powder, and salt.',
      'Heat lightly oiled skillet, pour in batter.',
      'Flip when bubbles form, cook until golden both sides.',
      'Serve warm with maple syrup.'
    ]
  },
  {
    id: '6',
    title: 'Caprese Salad',
    description: 'Simple Italian salad of mozzarella, tomatoes, and basil, drizzled with olive oil.',
    imageUrl: 'https://images.pexels.com/photos/1437261/pexels-photo-1437261.jpeg?auto=compress&w=600',
    tags: ['Vegetarian', 'Salad', 'Appetizer', 'Gluten-Free'],
    timeMinutes: 8,
    servings: 2,
    ingredients: [
      { name: 'Fresh mozzarella, sliced', quantity: '125g', checked: false },
      { name: 'Tomatoes, sliced', quantity: '2', checked: false },
      { name: 'Fresh basil leaves', quantity: 'a handful', checked: false },
      { name: 'Olive oil', quantity: 'to drizzle', checked: false },
      { name: 'Salt & pepper', quantity: 'to taste', checked: false }
    ],
    steps: [
      'Arrange alternating slices of mozzarella and tomato on a plate.',
      'Scatter fresh basil leaves on top.',
      'Drizzle generously with olive oil and season with salt and pepper.'
    ]
  },
  {
    id: '7',
    title: 'Vegan Lentil Soup',
    description: 'Cozy, hearty lentil soup loaded with veggies. Vegan and gluten-free.',
    imageUrl: '',
    tags: ['Vegan', 'Soup', 'Lunch', 'Quick', 'Gluten-Free'],
    timeMinutes: 40,
    servings: 4,
    ingredients: [
      { name: 'Brown or green lentils', quantity: '1 cup', checked: false },
      { name: 'Carrot, diced', quantity: '1', checked: false },
      { name: 'Celery, diced', quantity: '1 stalk', checked: false },
      { name: 'Onion, chopped', quantity: '1', checked: false },
      { name: 'Garlic cloves, minced', quantity: '2', checked: false },
      { name: 'Vegetable broth', quantity: '4 cups', checked: false },
      { name: 'Olive oil', quantity: '2 tbsp', checked: false },
      { name: 'Bay leaf', quantity: '1', checked: false }
    ],
    steps: [
      'Heat olive oil in large pot. Sauté onions, garlic, and celery until soft.',
      'Add carrot and stir for 2 minutes.',
      'Add lentils and veggie broth (and bay leaf). Bring to a boil.',
      'Simmer, covered, 30-35 min, until lentils are tender.',
      'Remove bay leaf. Season and serve.'
    ]
  },
  {
    id: '8',
    title: 'Berry Yogurt Parfait',
    description: 'Layered Greek yogurt, fresh berries, and crunchy granola for a healthy breakfast or snack.',
    imageUrl: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&w=600',
    tags: ['Breakfast', 'Vegetarian', 'Quick', 'Healthy', 'Dessert'],
    timeMinutes: 5,
    servings: 1,
    ingredients: [
      { name: 'Greek yogurt', quantity: '1/2 cup', checked: false },
      { name: 'Fresh berries', quantity: '1/3 cup', checked: false },
      { name: 'Granola', quantity: '1/4 cup', checked: false },
      { name: 'Honey', quantity: 'to drizzle', checked: false }
    ],
    steps: [
      'Layer yogurt, berries, and granola in a glass.',
      'Top with a drizzle of honey. Serve immediately.'
    ]
  },
  {
    id: '9',
    title: 'Shrimp Tacos with Slaw',
    description: 'Crispy shrimp and zesty slaw in a soft tortilla. A quick & flavorful meal.',
    imageUrl: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=600',
    tags: ['Seafood', 'Dinner', 'Mexican', 'Quick'],
    timeMinutes: 18,
    servings: 2,
    ingredients: [
      { name: 'Medium shrimp, peeled & deveined', quantity: '200g', checked: false },
      { name: 'Taco tortillas', quantity: '4', checked: false },
      { name: 'Cabbage, shredded', quantity: '1 cup', checked: false },
      { name: 'Lime', quantity: '1/2', checked: false },
      { name: 'Mayonnaise', quantity: '2 tbsp', checked: false },
      { name: 'Chili powder', quantity: '1 tsp', checked: false },
      { name: 'Olive oil', quantity: '1 tbsp', checked: false },
      { name: 'Salt & pepper', quantity: 'to taste', checked: false }
    ],
    steps: [
      'Toss shrimp with chili powder, salt, and pepper.',
      'Cook shrimp in a skillet with olive oil until pink.',
      'Mix cabbage with mayo and lime juice.',
      'Serve shrimp and slaw in warm tortillas.'
    ]
  },
  {
    id: '10',
    title: 'Chocolate Mug Cake',
    description: 'Rich fudgy chocolate cake, made in the microwave in one minute. Minimal mess – maximum flavor.',
    imageUrl: '',
    tags: ['Dessert', 'Quick', 'Vegetarian'],
    timeMinutes: 7,
    servings: 1,
    ingredients: [
      { name: 'All-purpose flour', quantity: '1/4 cup', checked: false },
      { name: 'Sugar', quantity: '2 tbsp', checked: false },
      { name: 'Unsweetened cocoa powder', quantity: '2 tbsp', checked: false },
      { name: 'Baking powder', quantity: '1/4 tsp', checked: false },
      { name: 'Milk', quantity: '1/4 cup', checked: false },
      { name: 'Vegetable oil', quantity: '2 tbsp', checked: false },
      { name: 'Chocolate chips', quantity: '1 tbsp', checked: false }
    ],
    steps: [
      'Mix dry ingredients in a mug.',
      'Add milk and oil; mix until smooth.',
      'Stir in chocolate chips.',
      'Microwave on high for 60-80 seconds until set.'
    ]
  },
  {
    id: '11',
    title: 'Quinoa Stuffed Peppers',
    description: 'Bell peppers stuffed with a hearty quinoa and veggie mix, baked to perfection.',
    imageUrl: 'https://images.pexels.com/photos/1117866/pexels-photo-1117866.jpeg?auto=compress&w=600',
    tags: ['Vegetarian', 'Healthy', 'Dinner', 'Gluten-Free'],
    timeMinutes: 45,
    servings: 4,
    ingredients: [
      { name: 'Bell peppers', quantity: '4', checked: false },
      { name: 'Cooked quinoa', quantity: '1 cup', checked: false },
      { name: 'Black beans', quantity: '1/2 cup', checked: false },
      { name: 'Corn kernels', quantity: '1/3 cup', checked: false },
      { name: 'Onion, chopped', quantity: '1/2', checked: false },
      { name: 'Cheese (optional)', quantity: '1/3 cup', checked: false },
      { name: 'Cumin', quantity: '1/2 tsp', checked: false },
      { name: 'Salt & pepper', quantity: 'to taste', checked: false }
    ],
    steps: [
      'Preheat oven to 375°F (190°C).',
      'Mix quinoa, beans, corn, onion, cumin, and cheese.',
      'Cut tops off peppers, fill with mixture.',
      'Place in baking dish. Bake covered 30 min, uncover and bake 10 min more.'
    ]
  },
  {
    id: '12',
    title: 'Classic French Toast',
    description: 'Golden, custardy slices topped with powdered sugar and fresh fruit.',
    imageUrl: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&w=600',
    tags: ['Breakfast', 'Vegetarian', 'Quick', 'Dessert'],
    timeMinutes: 20,
    servings: 2,
    ingredients: [
      { name: 'Thick bread slices', quantity: '4', checked: false },
      { name: 'Eggs', quantity: '2', checked: false },
      { name: 'Milk', quantity: '1/3 cup', checked: false },
      { name: 'Vanilla extract', quantity: '1 tsp', checked: false },
      { name: 'Butter', quantity: 'for frying', checked: false },
      { name: 'Powdered sugar and fruit', quantity: 'to serve', checked: false }
    ],
    steps: [
      'Beat eggs, milk, and vanilla in a shallow bowl.',
      'Dip bread in mixture, soak both sides.',
      'Cook in buttered skillet until golden.',
      'Top with powdered sugar and fresh fruit.'
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
