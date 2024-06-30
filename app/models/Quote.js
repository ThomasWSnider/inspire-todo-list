export class Quote {
  constructor(data) {
    this.id = data._id
    this.author = data.author
    this.content = data.content
    this.tags = data.tags
  }
}