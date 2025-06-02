import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { RecipesModules } from './recipes/recipes.module';

const modules = [RecipesModules];

@Module({
  imports: [
    ...modules,
    RouterModule.register([
      {
        path: 'api',
        children: [...modules],
      },
    ]),
  ],
})
export class AppModule {}
