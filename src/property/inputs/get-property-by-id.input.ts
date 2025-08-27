import { InputType, Field } from '@nestjs/graphql';
import { IsNumber, IsString, IsUUID, Length } from 'class-validator';

@InputType()
export class GetPropertyByIdInput {
  @Field()
  @IsUUID()
  id: string;
}
