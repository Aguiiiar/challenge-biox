import { Recipe } from '../../../domain/entities/recipe.entity';
import { RecipeRepository } from '../../../domain/repositories/recipe.repository';
import { ListAllRecipesUseCase } from '../list-all-recipes/list-all-recipes.use-case';

describe('ListAllRecipesUseCase', () => {
  it('deve retornar uma lista de receitas', () => {
    const fakeRecipes = [
      Recipe.create({
        title: 'Bolo de cenoura',
        description: 'Receita de bolo de cenoura',
        ingredients: ['cenoura', 'ovos', 'açúcar'],
      }),
      Recipe.create({
        title: 'Feijoada',
        description: 'Receita de feijoada tradicional',
        ingredients: ['feijão', 'carne', 'farinha'],
      }),
    ];

    const repository: jest.Mocked<RecipeRepository> = {
      create: jest.fn(),
      findById: jest.fn(),
      listAll: jest.fn().mockReturnValue(fakeRecipes),
    };

    const useCase = new ListAllRecipesUseCase(repository);

    const result = useCase.execute();

    expect(result).toEqual(fakeRecipes);
    expect(repository.listAll).toHaveBeenCalled();
  });
});
