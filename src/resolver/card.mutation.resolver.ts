import { Args, Int, Mutation, Resolver } from "@nestjs/graphql";
import { data } from "src/data";
import { UpdateCardInput } from "src/input/update.card.input";
import { CardModel } from "src/model";

@Resolver(() => CardModel)
export class CardMutationResolver {
    @Mutation(() => CardModel)
    update_card(@Args('id', { type: () => Int }) id: number, @Args('input', { type: () => UpdateCardInput}) input: UpdateCardInput) {
        let idx = data.cards.findIndex(card => card.id === id);
        let card = data.cards[idx];
        card = { ...card, ...input };
        return card;
    }
}