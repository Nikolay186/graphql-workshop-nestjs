import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { data } from "src/data";
import { CardModel, ColumnModel } from "src/model";

@Resolver(() => CardModel)
export class CardFieldResolver {
    @ResolveField('column', () => ColumnModel)
    get_column(@Parent() card: CardModel) {
        return data.columns.find(col => col.id === card.column_id);
    }
}