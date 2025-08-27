import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePropertyInput, FindAllPropertiesInput } from '../inputs';
import { InputJsonValue } from '@prisma/client/runtime/library';

@Injectable()
export class PropertyRepository {
  constructor(private prisma: PrismaService) {}

  async create(
    data: CreatePropertyInput,
    weatherData: InputJsonValue,
    lat: number,
    long: number,
  ) {
    return await this.prisma.property.create({
      data: {
        ...data,
        weatherData,
        lat,
        long,
      },
    });
  }

  async findAll(data: FindAllPropertiesInput) {
    return await this.prisma.property.findMany({
      where: {
        ...(data.city && { city: data.city }),
        ...(data.state && { state: data.state }),
        ...(data.zipCode && { zipCode: data.zipCode }),
      },
      orderBy: {
        createdAt: data.orderDirection || 'desc',
      },
    });
  }

  async findById(id: string) {
    return await this.prisma.property.findUniqueOrThrow({
      where: { id },
    });
  }

  async delete(id: string) {
    return await this.prisma.property.delete({
      where: { id },
    });
  }
}
