import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { CreateRecipeUseCase } from '../../core/application/use-cases/create-recipe/create-recipe.use-case';
import { RecipePresenter } from './presenters/recipe.presenter';
import { CreateRecipeDto } from './dtos/create-recipe.dto';
import { ListAllRecipesUseCase } from '../../core/application/use-cases/list-all-recipes/list-all-recipes.use-case';
import { GetByIdUseCase } from '../../core/application/use-cases/get-by-id/get-by-id.use-case';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';

@Controller('recipes')
@ApiTags('recipes')
export class RecipesController {
  constructor(
    private readonly createRecipe: CreateRecipeUseCase,
    private readonly getByIdRecipe: GetByIdUseCase,
    private readonly listAllRecipes: ListAllRecipesUseCase,
  ) {}

  @Post()
  async create(@Body() body: CreateRecipeDto) {
    const recipe = await this.createRecipe.execute(body);

    return RecipePresenter.toHttp(recipe);
  }

  @Get('list-all')
  async listAll(@Res() response: Response) {
    const recipes = await this.listAllRecipes.execute();

    if (recipes.length === 0) {
      return response.status(204).send();
    }

    return response.status(200).json(RecipePresenter.toListHttp(recipes));
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const recipe = await this.getByIdRecipe.execute({
      id,
    });

    if (!recipe) {
      throw new NotFoundException(`Recipe with ID ${id} not found.`);
    }

    return recipe;
  }
}
