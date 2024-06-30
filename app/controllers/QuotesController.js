import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";

export class QuotesController {
  constructor() {
    console.log('QuotesController is reading');
    this.getQuote()
  }


  async getQuote() {
    try {
      await quotesService.getQuote()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }
}