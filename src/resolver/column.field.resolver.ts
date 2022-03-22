import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { data } from "src/data";
import { CardModel, ColumnModel } from "src/model";

@Resolver(() => ColumnModel)
export class ColumnFieldResolver {
    @ResolveField('cards', () => [CardModel])
    get_column_cards(@Parent() col: ColumnModel) {
        return data.cards.filter(card => card.column_id === col.id);
    }
}