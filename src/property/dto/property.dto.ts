import { ObjectType, Field } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
export class Property {
  @Field()
  id: string;

  @Field()
  city: string;

  @Field()
  street: string;

  @Field()
  state: string;

  @Field()
  zipCode: string;

  @Field(() => GraphQLJSON)
  weatherData: unknown;

  @Field()
  lat: number;

  @Field()
  long: number;

  @Field()
  createdAt: Date;
}
