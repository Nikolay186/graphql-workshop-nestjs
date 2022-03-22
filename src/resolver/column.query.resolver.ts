import { Resolver, Query, Args, Int } from "@nestjs/graphql";
import { data } from "src/data";
import { ColumnModel } from "src/model";

@Resolver(() => ColumnModel)
export class ColumnQueryResolver {
    @Query(() => [ColumnModel], { name: 'get_columns'})
    get_columns() {
        return data.columns;
    }

    @Query(() => ColumnModel, { name: 'get_column_by_id' })
    get_column(@Args('id', { type: () => Int }) id: number) {
        return data.columns.find(column => column.id === id);
    }
}