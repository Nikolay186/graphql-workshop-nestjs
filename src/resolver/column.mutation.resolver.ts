import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { data } from "src/data";
import { CreateColumnInput } from "src/input/create.column.input";
import { ColumnModel } from "src/model";

@Resolver(() => ColumnModel)
export class ColumnMutationResolver {
    @Mutation(() => [ColumnModel])
    create_column(@Args('input', { type: () => CreateColumnInput }) input: CreateColumnInput) {
        data.columns.push(input);
        return data.columns;
    }
}