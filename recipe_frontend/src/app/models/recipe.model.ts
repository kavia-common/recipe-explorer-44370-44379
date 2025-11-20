export interface Ingredient {
  name: string;
  quantity?: string;
  checked?: boolean;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  ingredients: Ingredient[];
  steps: string[];
  timeMinutes?: number;
  servings?: number;
}
