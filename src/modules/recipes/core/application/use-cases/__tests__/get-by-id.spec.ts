import { Recipe } from '../../../domain/entities/recipe.entity';
import { RecipeRepository } from '../../../domain/repositories/recipe.repository';
import { GetByIdUseCase } from '../get-by-id/get-by-id.use-case';

describe('GetByIdUseCase', () => {
  it('deve retornar a receita correspondente ao ID', async () => {
    const fakeRecipe = Recipe.create({
      title: 'Arroz',
      description: 'Receita de arroz branco',
      ingredients: ['arroz', 'água', 'sal'],
    });

    const repository: jest.Mocked<RecipeRepository> = {
      create: jest.fn(),
      findById: jest.fn().mockResolvedValue(fakeRecipe),
      listAll: jest.fn(),
    };

    const useCase = new GetByIdUseCase(repository);

    const result = await useCase.execute({ id: fakeRecipe.id });

    expect(result).toEqual(fakeRecipe);
    expect(repository.findById).toHaveBeenCalledWith(fakeRecipe.id);
  });
});
