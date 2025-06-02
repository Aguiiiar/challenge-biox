import { Recipe } from '../../../../../modules/recipes/core/domain/entities/recipe.entity';

export class RecipePresenter {
  static toHttp(recipe: Recipe) {
    return {
      id: recipe.id,
      title: recipe.title,
      description: recipe.description,
      ingredients: recipe.ingredients,
    };
  }

  static toListHttp(recipes: Recipe[]) {
    return recipes.map((recipe) => ({
      id: recipe.id,
      title: recipe.title,
      description: recipe.description,
      ingredients: recipe.ingredients,
    }));
  }
}
