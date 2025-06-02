import { Module } from '@nestjs/common';
import { RecipesController } from './infra/http/recipe.controller';
import { createRecipeFactory } from './infra/factories/create-recipe.factory';
import { listAllRecipesFactory } from './infra/factories/list-all-recipes.factory';
import { getByIdRecipesFactory } from './infra/factories/get-by-id.factory';
import { InMemoryRecipeRepositoryImpl } from './infra/database/repositories/recipe.repository';

@Module({
  controllers: [RecipesController],
  providers: [
    InMemoryRecipeRepositoryImpl,
    createRecipeFactory,
    getByIdRecipesFactory,
    listAllRecipesFactory,
  ],
})
export class RecipesModules {}
