export class Quote {
  constructor(data) {
    this.id = data._id
    this.author = data.author
    this.content = data.content
    this.tags = data.tags
  }

  get quoteHTMLTemplate() {
    return `
<h2 class='mt-5 ms-3 page-quote fs-4'>"${this.content}"</h2>
<p class="fs-5 text-end me-5 quote-author">-${this.author}</p>
    `
  }
}