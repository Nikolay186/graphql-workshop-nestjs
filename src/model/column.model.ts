import { Field, Int, ObjectType } from "@nestjs/graphql";
import { CardModel } from "./card.model";

@ObjectType()
export class ColumnModel {
    @Field(() => Int)
    id: number;

    @Field()
    title: string;

    @Field(() => [CardModel])
    cards?: CardModel[];
}