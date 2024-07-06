import { weathersService } from "../services/WeathersService.js";
import { Pop } from "../utils/Pop.js";

export class WeathersController {
  constructor() {
    console.log('Weathers Controller');
    this.getWeather()
  }

  async getWeather() {
    try {
      await weathersService.getWeather()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }
}