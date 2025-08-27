import { InputType, Field } from '@nestjs/graphql';
import { IsEnum, IsOptional, IsString, Length } from 'class-validator';
import { OrderDirection } from '../enums';

@InputType()
export class FindAllPropertiesInput {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  city?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  state?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @Length(5, 5)
  @IsOptional()
  zipCode?: string;

  @Field(() => OrderDirection, { nullable: true })
  @IsOptional()
  @IsEnum(OrderDirection)
  orderDirection?: OrderDirection;
}
