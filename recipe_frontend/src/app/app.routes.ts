import { Routes } from '@angular/router';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'recipes/:id', component: RecipeDetailComponent },
  { path: '**', component: NotFoundComponent }
];
