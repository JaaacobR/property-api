import { Module } from '@nestjs/common';
import { PropertyRepository } from './repositories';
import {
  CreatePropertyResolver,
  GetPropertyResolver,
  DeletePropertyResolver,
  FindAllPropertiesResolver,
} from './resolvers';
import { CreatePropertyService } from './services';

@Module({
  imports: [],
  controllers: [],
  providers: [
    PropertyRepository,
    CreatePropertyResolver,
    DeletePropertyResolver,
    FindAllPropertiesResolver,
    GetPropertyResolver,
    CreatePropertyService,
  ],
})
export class PropertyModule {}
