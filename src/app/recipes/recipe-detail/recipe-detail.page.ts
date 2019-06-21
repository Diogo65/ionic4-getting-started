import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadRecipes: Recipe;

  //injetar o servço de receitas
  constructor(private activateRoute: ActivatedRoute, private recipesService: RecipesService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')){
        //return
      }
      //extrai o recipeId do paramMap
      const recipeId = paramMap.get('recipeId');
      this.loadRecipes = this.recipesService.getRecipe(recipeId);
    });
  }

}
