import { Injectable } from '../../../node_modules/@angular/core';
import { Http, Response } from '../../../node_modules/@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { map } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '../../../node_modules/@angular/common/http';

@Injectable()
export class ServerService {
    private apiKey = 'https://angularcourse-recipebook.firebaseio.com/recipes.json';
    constructor(private recipeService: RecipeService, private authService: AuthService,
                private httpClient: HttpClient ) {}

    storeRecipes() {
        // return this.httpClient.put(this.apiKey, this.recipeService.getRecipes(), {
        //     observe: 'body',
        //     params: new HttpParams().set('auth', token)
        // });
        const req = new HttpRequest('PUT', this.apiKey, this.recipeService.getRecipes(),
                                    {reportProgress: true});
        return this.httpClient.request(req);
    }

    getRecipes() {
        // return this.httpClient.get<Recipe[]>(this.apiKey + token)
        return this.httpClient.get<Recipe[]>(this.apiKey, {
            observe: 'body',
            responseType: 'json'
        })
        .pipe(map(
                (recipes) => {
                    for (const recipe of recipes) {
                        if (!recipe['ingredients']) {
                            console.log(recipe);
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            ))
            .subscribe( (recipes: Recipe[]) => {
                this.recipeService.updateAllRecipes(recipes);
            });
    }

    // Old method - using http, not http client
    // storeRecipes() {
    //     const token = this.authService.getToken();
    //     return this.http.put(this.apiKey + token, this.recipeService.getRecipes());
    // }

    // getRecipes() {
    //     const token = this.authService.getToken();

    //     return this.http.get(this.apiKey + token)
    //         .pipe(map(
    //             (response: Response) => {
    //                 const fetchedRecipes = response.json();
    //                 for (const recipe of fetchedRecipes) {
    //                     if (!recipe['ingredients']) {
    //                         console.log(recipe);
    //                         recipe['ingredients'] = [];
    //                     }
    //                 }
    //                 return fetchedRecipes;
    //             }
    //         ))
    //         .subscribe( (recipes: Recipe[]) => {
    //             this.recipeService.updateAllRecipes(recipes);
    //         });
    // }
}
