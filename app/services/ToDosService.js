import { AppState } from "../AppState.js";
import { ToDo } from "../models/ToDo.js";
import { api } from "./AxiosService.js";

class ToDosService {
  constructor() {
    console.log('ToDosService is connected');
  }

  getToDos() {

  }

  async makeNewToDo(formData) {
    const response = await api.post('api/todos', formData)

    console.log('I am making a new note', response.data);

    const newToDo = new ToDo(response.data)

    AppState.toDos.push(newToDo)
  }


}

export const toDosService = new ToDosService