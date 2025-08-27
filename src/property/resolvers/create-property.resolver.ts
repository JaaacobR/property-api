import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Property } from '../dto/property.dto';
import { CreatePropertyService } from '../services';
import { CreatePropertyInput } from '../inputs';

@Resolver()
export class CreatePropertyResolver {
  constructor(private readonly createPropertyService: CreatePropertyService) {}

  @Mutation(() => Property)
  async addProperty(@Args('data') data: CreatePropertyInput) {
    return this.createPropertyService.createProperty(data);
  }
}
