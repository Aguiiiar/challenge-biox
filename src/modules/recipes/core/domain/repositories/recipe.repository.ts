import { Recipe } from '../../../../../modules/recipes/core/domain/entities/recipe.entity';

export interface RecipeRepository {
  create(recipe: Recipe): Promise<Recipe>;
  listAll(): Promise<Recipe[]>;
  findById(recipeId: string): Promise<Recipe | null>;
}
