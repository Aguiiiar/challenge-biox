import { ListAllRecipesUseCase } from '../../core/application/use-cases/list-all-recipes/list-all-recipes.use-case';
import { InMemoryRecipeRepositoryImpl } from '../database/repositories/recipe.repository';

export const listAllRecipesFactory = {
  provide: ListAllRecipesUseCase,
  useFactory: (repository: InMemoryRecipeRepositoryImpl) => {
    return new ListAllRecipesUseCase(repository);
  },
  inject: [InMemoryRecipeRepositoryImpl],
};
