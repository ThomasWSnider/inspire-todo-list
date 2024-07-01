import { AppState } from "../AppState.js";
import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class QuotesController {
  constructor() {
    console.log('QuotesController is reading');
    AppState.on('quote', this.drawQuote)
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

  drawQuote() {
    const quote = AppState.quote
    setHTML('pageQuote', quote.quoteHTMLTemplate)

  }
}