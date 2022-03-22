import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CardFieldResolver } from './resolver/card.field.resolver';
import { CardMutationResolver } from './resolver/card.mutation.resolver';
import { CardQueryResolver } from './resolver/card.query.resolver';
import { ColumnFieldResolver } from './resolver/column.field.resolver';
import { ColumnMutationResolver } from './resolver/column.mutation.resolver';
import { ColumnQueryResolver } from './resolver/column.query.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
    }),
  ],
  controllers: [],
  providers: [
    CardFieldResolver,
    ColumnFieldResolver,
    CardQueryResolver,
    ColumnQueryResolver,
    CardMutationResolver,
    ColumnMutationResolver,
  ],
})
export class AppModule {}
