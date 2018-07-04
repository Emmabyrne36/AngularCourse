import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
    @Output() recipeWasSelected = new EventEmitter<Recipe>();
    recipe: Recipe[] = [
            new Recipe('A Test Recipe', 'This is simple a test', 'https://torange.biz/photo/38/IMAGE/pizza-health-recipe-38030.jpg'),
            new Recipe('Second', 'This is a second recipe', 'https://c1.staticflickr.com/9/8585/28906445485_ce32150295_b.jpg')
        ];

    constructor() { }

    ngOnInit() {
    }

    onRecipeSelected(recipe: Recipe) {
        this.recipeWasSelected.emit(recipe);
    }
}
