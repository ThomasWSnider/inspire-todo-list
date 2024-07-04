export class ToDo {
  constructor(data) {
    this.description = data.description
    this.completed = data.completed
    this.id = data.id
  }




  get toDoHTMLTemplate() {
    return `
    <div class="col-12 mb-2">
      <div class="form-check d-flex align-items-center">
        <input onchange="app.ToDosController.toggleCompleteToDo('${this.id}')" class="form-check-input me-2" type="checkbox" id="${this.id}CheckBox" ${this.completed ? 'checked' : ''}>
        <label class="form-check-label ${this.completed ? 'text-decoration-line-through' : ''}" for="${this.id}CheckBox">
          ${this.description}
        </label>
        <button onclick="app.ToDosController.destroyToDo('${this.id}')" class="btn btn-outline-danger text-light ms-auto"><i class="mdi mdi-delete-forever"></i></button>
      </div>
    </div>
    `
  }

}