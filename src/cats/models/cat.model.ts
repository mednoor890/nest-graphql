// eslint-disable-next-line prettier/prettier
import { Field, ObjectType } from '@nestjs/graphql';
import { ID } from 'type-graphql';
@ObjectType()
export class Cat {
 @Field(type => ID ,{nullable: true}) // @Field is used to provide metadata about each field's graphql type and optionality , 
 id?: number;

 @Field({nullable: true}) 
age?: number;

 @Field({ nullable: true })
name?: string;

 @Field({ nullable: true })
breed?: string;
}