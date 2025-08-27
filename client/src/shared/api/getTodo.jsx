import { useTodosStore } from "../store/useTodosStore";

const { setNewTodos } = useTodosStore.getState();

export async function getTodo() {
  try {
    const result = await fetch("http://localhost:5000/todos");
    const data = await result.json();

    const today = new Date();
    const formattedDate = `${today.getDate()}.${
      today.getMonth() + 1
    }.${today.getFullYear()}`;
    const todayTodos = data.filter((todo) => todo.data === formattedDate);

    setNewTodos(todayTodos);
  } catch (error) {
    console.error(error.message);
  }
}
