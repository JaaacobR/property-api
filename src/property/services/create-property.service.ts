import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePropertyInput } from '../inputs';
import axios from 'axios';
import { PropertyRepository } from '../repositories';

@Injectable()
export class CreatePropertyService {
  private readonly baseUrl = process.env.BASE_URL;
  private readonly apiKey = process.env.WEATHERSTACK_KEY;

  constructor(private readonly propertyRepository: PropertyRepository) {}

  async createProperty(data: CreatePropertyInput) {
    const { weatherData, lat, long } = await this.getWeather(
      data.city,
      data.zipCode,
    );

    return this.propertyRepository.create(data, weatherData, lat, long);
  }

  private async getWeather(city: string, zipCode: string) {
    const query = `${city}, ${zipCode}`;
    const url = `${this.baseUrl}?access_key=${this.apiKey}&query=${encodeURIComponent(query)}`;

    try {
      const res = await axios.get(url);

      const { current, location } = res.data;
      return {
        weatherData: current,
        lat: Number(location.lat),
        long: Number(location.lon),
      };
    } catch (ex) {
      throw new NotFoundException('Could not fetch weather data' + ex.message);
    }
  }
}
