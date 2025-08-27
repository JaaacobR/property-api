import { registerEnumType } from '@nestjs/graphql';

export enum OrderDirection {
  asc = 'asc',
  desc = 'desc',
}

registerEnumType(OrderDirection, {
  name: 'OrderDirection',
  description: 'Order direction (ascending or descending)',
});
