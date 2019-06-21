import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

//Esse arquivo é um serviço que pode ser usado na página de receitas e detalhes da receita

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrhKMlDquOhaR1EVmS_R_QdHlv7xkwabbfk5rLuPzXnLGw3s9i',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://st2.depositphotos.com/7303196/12270/v/950/depositphotos_122707326-stock-illustration-cooking-salad-with-fresh-vegetables.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    }
  ];
  constructor() {}

  getAllRecipes(){
    return [...this.recipes]; // extrai todos os elementos do array e adiciona em outro array
  }

  getRecipe(recipeId: string) { //Devolve uma única receita para esse Id
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
      })
    };
  }
}

