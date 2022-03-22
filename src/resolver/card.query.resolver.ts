import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { data } from "src/data";
import { CardModel } from "src/model";

@Resolver(() => CardModel)
export class CardQueryResolver {
    @Query(() => [CardModel], { name: 'get_cards' })
    get_cards() {
        return data.cards;
    }

    @Query(() => CardModel, { name: 'get_card_by_id' })
    get_card(@Args('id', { type: () => Int }) id: number) {
        return data.cards.find(card => card.id === id);
    }
}
