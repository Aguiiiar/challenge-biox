import { randomUUID } from 'node:crypto';
import { BaseEntity } from '../../../../../core/domain/base-entity';

export interface RecipeProps {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
}

export class Recipe extends BaseEntity<RecipeProps> {
  static create(props: Omit<RecipeProps, 'id'>) {
    const data: RecipeProps = {
      id: randomUUID(),
      ...props,
    };
    return new Recipe(data);
  }

  get id() {
    return this.props.id;
  }

  get title() {
    return this.props.title;
  }

  get description() {
    return this.props.description;
  }

  get ingredients() {
    return this.props.ingredients;
  }
}
