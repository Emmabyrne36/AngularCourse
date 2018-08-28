import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { switchMap, withLatestFrom, map } from 'rxjs/operators';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';

import * as RecipeActions from '../store/recipe.actions';
import { Recipe } from '../recipe.model';
import * as fromRecipe from '../store/recipe.reducers';

@Injectable()
export class RecipeEffects {
    private apiKey = 'https://angularcourse-recipebook.firebaseio.com/recipes.json';

    @Effect()
    recipeFetch = this.actions$
    .ofType(RecipeActions.FETCH_RECIPES)
    .pipe(switchMap((action: RecipeActions.FetchRecipes) => {
      return this.httpClient.get<Recipe[]>(this.apiKey, {
        observe: 'body',
        responseType: 'json'
      });
    }), map(
      (recipes) => {
        console.log(recipes);
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return {
          type: RecipeActions.SET_RECIPES,
          payload: recipes
        };
      }
    ));

    @Effect({dispatch: false}) // don't do anything after the result found
    recipeStore = this.actions$
      .ofType(RecipeActions.STORE_RECIPES)
      .pipe(withLatestFrom(this.store.select('recipes')),
        switchMap(([action, state]) => {
          const req = new HttpRequest('PUT', this.apiKey, state.recipes, {reportProgress: true});
          return this.httpClient.request(req);
        }));

    constructor(private actions$: Actions, private httpClient: HttpClient, private store: Store<fromRecipe.FeatureState>) {}
}
