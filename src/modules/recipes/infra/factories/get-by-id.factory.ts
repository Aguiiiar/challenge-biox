import { GetByIdUseCase } from '../../core/application/use-cases/get-by-id/get-by-id.use-case';
import { InMemoryRecipeRepositoryImpl } from '../database/repositories/recipe.repository';

export const getByIdRecipesFactory = {
  provide: GetByIdUseCase,
  useFactory: (repository: InMemoryRecipeRepositoryImpl) => {
    return new GetByIdUseCase(repository);
  },
  inject: [InMemoryRecipeRepositoryImpl],
};
