import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private http = inject(HttpClient);
  private apiBase = environment.apiBaseUrl;

  // PUBLIC_INTERFACE
  listRecipes(): Observable<Recipe[]> {
    if (this.apiBase) {
      return this.http.get<Recipe[]>(`${this.apiBase}/recipes`);
    }
    return of([]); // fallback, replaced at app bootstrap by Mock
  }

  // PUBLIC_INTERFACE
  getRecipeById(id: string): Observable<Recipe | undefined> {
    if (this.apiBase) {
      return this.http.get<Recipe>(`${this.apiBase}/recipes/${id}`);
    }
    return of(undefined); // fallback, replaced at app bootstrap by Mock
  }
}
