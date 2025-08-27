import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PropertyRepository } from '../repositories';
import { Property } from '../dto/property.dto';
import { GetPropertyByIdInput } from '../inputs';

@Resolver()
export class DeletePropertyResolver {
  constructor(private readonly propertyRepository: PropertyRepository) {}

  @Mutation(() => Property)
  async deleteProperty(@Args('data') data: GetPropertyByIdInput) {
    return await this.propertyRepository.delete(data.id);
  }
}
