import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    // Where the recipes are managed

    private recipes: Recipe[] = [
        new Recipe('Homemade Pizza', 'Delicious homemade pizza', 'https://torange.biz/photo/38/IMAGE/pizza-health-recipe-38030.jpg', [
            new Ingredient('Pizza base', 2),
            new Ingredient('Vegetables', 5)
        ]),
        new Recipe('Homemade Curry', 'Tasty curry', 'https://c1.staticflickr.com/9/8585/28906445485_ce32150295_b.jpg', [
            new Ingredient('Curry powder', 1),
            new Ingredient('Meat', 2)
        ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice(); // returns copy of the original array, meaning you can't access the recipes array directly from outside
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
}
