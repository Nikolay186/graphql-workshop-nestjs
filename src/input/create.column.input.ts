import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateColumnInput {
    @Field(() => Int, { nullable: false })
    id: number;

    @Field({ nullable: false })
    title: string;
}