import axios from "axios"

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface FetchTodos {
  (): Promise<Todo[]>;
  (id?: number): Promise<Todo>
}

export const fetchTodos: FetchTodos = async (id?: number) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id ?? ''}`)
    return response.data
  } catch {
    return []
  }
}
