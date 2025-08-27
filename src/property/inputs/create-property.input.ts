import { InputType, Field } from '@nestjs/graphql';
import { IsString, Length } from 'class-validator';

@InputType()
export class CreatePropertyInput {
  @Field()
  @IsString()
  city: string;

  @Field()
  @IsString()
  street: string;

  @Field()
  @IsString()
  state: string;

  @Field()
  @IsString()
  @Length(5, 5)
  zipCode: string;
}
