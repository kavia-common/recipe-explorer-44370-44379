import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

// TEMP: Force mock data in dev/preview mode
import { RecipeService } from './services/recipe.service';
import { MockRecipeService } from './services/mock-recipe.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),

    // Ensure mock service is used for RecipeService (dev/preview only)
    { provide: RecipeService, useClass: MockRecipeService }
  ]
};
