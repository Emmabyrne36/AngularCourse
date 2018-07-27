import { Injectable } from '../../../node_modules/@angular/core';
import { Http, Response } from '../../../node_modules/@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { map } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ServerService {
    private apiKey = 'INPUT_YOUR_API_KEY';
    constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {}

    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put(this.apiKey + token, this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();

        return this.http.get(this.apiKey + token)
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
