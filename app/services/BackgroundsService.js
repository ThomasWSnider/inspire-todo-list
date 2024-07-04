import { AppState } from "../AppState.js";
import { Background } from "../models/Background.js";
import { api } from "./AxiosService.js";

class BackgroundsService {
  constructor() {
    console.log('Images incoming');
  }

  async getBackground() {
    const response = await api.get(`api/images?category=${this.getRandomQuery()}`)
    const newBackground = new Background(response.data)
    AppState.background = newBackground
    console.log(AppState.background);
  }

  getRandomQuery() {
    const queries = AppState.queries
    const randomQueryInteger = Math.floor(Math.random() * queries.length)
    let randomQuery = queries[randomQueryInteger]
    return randomQuery
  }

}

export const backgroundsService = new BackgroundsService