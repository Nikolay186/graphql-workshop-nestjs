import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class UpdateCardInput {
    @Field({ nullable: true })
    title?: string;

    @Field(() => Int, { nullable: true })
    column_id?: number;
}