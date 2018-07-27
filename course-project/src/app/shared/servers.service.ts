import { Injectable } from '../../../node_modules/@angular/core';
import { Http, Response } from '../../../node_modules/@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { map } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ServerService {
    constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {}

    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put('https://angularcourse-recipebook.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();

        return this.http.get('https://angularcourse-recipebook.firebaseio.com/recipes.json?auth=' + token)
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
