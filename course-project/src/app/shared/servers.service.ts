import { Injectable } from '../../../node_modules/@angular/core';
import { Http, Response } from '../../../node_modules/@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { map } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class ServerService {
    constructor(private http: Http, private recipeService: RecipeService) {}

    storeRecipes() {
        return this.http.put('https://angularcourse-recipebook.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        return this.http.get('https://angularcourse-recipebook.firebaseio.com/recipes.json')
            .pipe(map(
                (response: Response) => {
                    const fetchedRecipes = response.json();
                    for (const recipe of fetchedRecipes) {
                        if (!recipe['ingredients']) {
                            console.log(recipe);
                            recipe['ingredients'] = [];
                        }
                    }
                    return fetchedRecipes;
                }
            ))
            .subscribe( (recipes: Recipe[]) => {
                this.recipeService.updateAllRecipes(recipes);
            });
    }
}
