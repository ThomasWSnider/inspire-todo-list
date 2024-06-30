import { AppState } from "../AppState.js";
import { Quote } from "../models/Quote.js";
import { api } from "./AxiosService.js";

class QuotesService {
  constructor() {
    console.log('Wisdom incoming');
  }

  async getQuote() {
    const response = await api.get('api/quotes')
    const newQuote = new Quote(response.data)
    AppState.quote = newQuote
    console.log(AppState.quote);
  }
}

export const quotesService = new QuotesService