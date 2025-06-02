import { Injectable } from '@nestjs/common';
import { Recipe } from '../../../../../modules/recipes/core/domain/entities/recipe.entity';
import { RecipeRepository } from '../../../../../modules/recipes/core/domain/repositories/recipe.repository';

@Injectable()
export class InMemoryRecipeRepositoryImpl implements RecipeRepository {
  private recipes: Recipe[] = [];

  async create(recipe: Recipe): Promise<Recipe> {
    this.recipes.push(recipe);
    return recipe;
  }

  async findById(recipeId: string): Promise<Recipe | null> {
    const recipe = this.recipes.find((r) => r.id === recipeId);
    return recipe ?? null;
  }

  async listAll(): Promise<Recipe[]> {
    return this.recipes;
  }
}
