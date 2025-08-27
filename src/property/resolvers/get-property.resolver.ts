import { Resolver, Query, Args } from '@nestjs/graphql';
import { PropertyRepository } from '../repositories';
import { Property } from '../dto/property.dto';
import { GetPropertyByIdInput } from '../inputs';

@Resolver()
export class GetPropertyResolver {
  constructor(private readonly propertyRepository: PropertyRepository) {}

  @Query(() => Property)
  async getProperty(@Args('data') data: GetPropertyByIdInput) {
    return await this.propertyRepository.findById(data.id);
  }
}
