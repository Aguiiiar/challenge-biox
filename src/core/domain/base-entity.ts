export abstract class BaseEntity<T> {
  public readonly createdAt: Date;
  public updatedAt: Date;

  constructor(
    public props: T,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    this.createdAt = createdAt ?? new Date();
    this.updatedAt = updatedAt ?? new Date();
  }

  touch() {
    this.updatedAt = new Date();
  }
}
