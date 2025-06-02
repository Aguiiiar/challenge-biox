import { RecipeRepository } from '../../../domain/repositories/recipe.repository';

export interface GetByIdRequest {
  id: string;
}

export class GetByIdUseCase {
  constructor(private readonly repository: RecipeRepository) {}
  async execute(data: GetByIdRequest) {
    const recipe = await this.repository.findById(data.id);
    return recipe;
  }
}
