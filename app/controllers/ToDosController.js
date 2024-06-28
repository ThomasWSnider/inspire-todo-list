import { AppState } from "../AppState.js";
import { toDosService } from "../services/ToDosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class ToDosController {
  constructor() {
    console.log('ToDosController reporting');
    AppState.on('toDos', this.drawToDos)
    AppState.on('user', this.getToDos)
  }


  drawToDos() {
    const todos = AppState.toDos
    let toDosHTMLString = ``
    todos.forEach((toDo) => toDosHTMLString += toDo.toDoHTMLTemplate)
    setHTML('toDoList', toDosHTMLString)
  }

  async getToDos() {
    try {
      await toDosService.getToDos()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  async makeNewToDo() {
    try {
      event.preventDefault()
      const form = event.target
      const toDoData = getFormData(form)
      console.log('I have the todo data', toDoData);
      await toDosService.makeNewToDo(toDoData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  async destroyToDo(toDoId) {
    try {
      const choice = Pop.confirm('Are you sure you wish to delete this item on your To Do List?')
      if (!choice) return

      await toDosService.destroyToDo(toDoId)
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }
}