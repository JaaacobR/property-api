import { InputType, Field } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class GetPropertyByIdInput {
  @Field()
  @IsUUID()
  id: string;
}
