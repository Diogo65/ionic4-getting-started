import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadRecipes: Recipe;

  //injetar o servço de receitas
  constructor(
    private activateRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')){
        //redirect
        this.router.navigate(['/recipes']);
        return;
      }
      //extrai o recipeId do paramMap
      const recipeId = paramMap.get('recipeId');
      this.loadRecipes = this.recipesService.getRecipe(recipeId);
    });
  }

  onDeleteRecipe(){
    //exibe uma tela de alert (Controlador de alerta)
    this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the recipe?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => { //Define uma função que é executado quando o botão é pressionado
            this.recipesService.deleteRecipe(this.loadRecipes.id);
            this.router.navigate(['/recipes']);
          }
        }
      ]
    })
    .then(alertEl => {
      alertEl.present();
    });
  }
}
