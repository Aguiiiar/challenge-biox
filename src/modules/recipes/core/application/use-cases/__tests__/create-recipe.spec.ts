import { Recipe } from '../../../domain/entities/recipe.entity';
import { RecipeRepository } from '../../../domain/repositories/recipe.repository';
import { CreateRecipeUseCase } from '../create-recipe/create-recipe.use-case';

describe('CreateRecipeUseCase', () => {
  let useCase: CreateRecipeUseCase;
  let repository: jest.Mocked<RecipeRepository>;

  beforeEach(() => {
    repository = {
      create: jest.fn(),
      findById: jest.fn(),
      listAll: jest.fn(),
    };
    useCase = new CreateRecipeUseCase(repository);
  });

  it('should create a new recipe and save it in the repository', async () => {
    const input = {
      title: 'Bolo de cenoura',
      description: 'Receita clássica',
      ingredients: ['cenoura', 'ovos', 'óleo', 'açúcar'],
    };

    const createdRecipe = Recipe.create(input);
    repository.create.mockResolvedValueOnce(createdRecipe);

    const result = await useCase.execute(input);

    expect(repository.create).toHaveBeenCalledTimes(1);
    expect(repository.create).toHaveBeenCalledWith(expect.any(Recipe));
    expect(result).toEqual(createdRecipe);
  });
});
