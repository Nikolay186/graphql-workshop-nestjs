import { Field, Int, ObjectType } from "@nestjs/graphql";
import { ColumnModel } from "./column.model";

@ObjectType()
export class CardModel {
    @Field(() => Int)
    id: number;
    
    @Field()
    title: string;

    @Field(() => Int)
    column_id: number;

    @Field(() => ColumnModel)
    column?: ColumnModel;
}