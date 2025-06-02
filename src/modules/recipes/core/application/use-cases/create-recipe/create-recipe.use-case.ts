import { Recipe } from '../../../domain/entities/recipe.entity';
import { RecipeRepository } from '../../../domain/repositories/recipe.repository';

export interface CreateRecipeRequest {
  title: string;
  description: string;
  ingredients: string[];
}

export class CreateRecipeUseCase {
  constructor(private readonly repository: RecipeRepository) {}

  async execute(data: CreateRecipeRequest) {
    const recipe = Recipe.create(data);

    return this.repository.create(recipe);
  }
}
