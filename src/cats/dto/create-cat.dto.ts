import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
@ObjectType()
export class CatType {
  @Field(() => ID)
  id: number;
  @Field(() => Int)
  readonly age: number;
  @Field()
  readonly name: string;
  @Field()
  readonly breed: string;
}