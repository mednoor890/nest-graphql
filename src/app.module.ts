import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, // what is apollo driver
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // what is  join(process.cwd()
      sortSchema: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/first'),
    CatsModule,
  ],
})
export class AppModule {}
