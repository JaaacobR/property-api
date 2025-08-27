import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { CreatePropertyInput, FindAllPropertiesInput } from '../inputs';
import { PropertyRepository } from '../repositories';
import { Property } from '../dto/property.dto';

@Resolver()
export class FindAllPropertiesResolver {
  constructor(private readonly propertyRepository: PropertyRepository) {}

  @Query(() => [Property])
  async findAllProperties(@Args('data') data: FindAllPropertiesInput) {
    return await this.propertyRepository.findAll(data);
  }
}
