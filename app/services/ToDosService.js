import { AppState } from "../AppState.js";
import { ToDo } from "../models/ToDo.js";
import { api } from "./AxiosService.js";

class ToDosService {
  constructor() {
    console.log('ToDosService is connected');
  }

  async getToDos() {
    const response = await api.get('api/todos')
    console.log('I have your to do list sir', response.data);
    const myToDos = response.data.map((todoPOJO) => new ToDo(todoPOJO))
    AppState.toDos = myToDos
  }

  async makeNewToDo(formData) {
    const response = await api.post('api/todos', formData)

    console.log('I am making a new note', response.data);

    const newToDo = new ToDo(response.data)

    AppState.toDos.push(newToDo)
  }

  destroyToDo(toDoId) {
    const response = api.delete(`api/todos/${toDoId}`)
    console.log('🪓 the todo', response.data);

  }

}

export const toDosService = new ToDosService