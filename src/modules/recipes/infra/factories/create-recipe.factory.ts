import { CreateRecipeUseCase } from '../../core/application/use-cases/create-recipe/create-recipe.use-case';
import { InMemoryRecipeRepositoryImpl } from '../database/repositories/recipe.repository';

export const createRecipeFactory = {
  provide: CreateRecipeUseCase,
  useFactory: (repository: InMemoryRecipeRepositoryImpl) => {
    return new CreateRecipeUseCase(repository);
  },
  inject: [InMemoryRecipeRepositoryImpl],
};
