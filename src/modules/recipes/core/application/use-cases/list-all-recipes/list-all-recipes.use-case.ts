import { RecipeRepository } from '../../../domain/repositories/recipe.repository';

export class ListAllRecipesUseCase {
  constructor(private readonly repository: RecipeRepository) {}

  execute() {
    return this.repository.listAll();
  }
}
