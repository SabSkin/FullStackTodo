export async function addTodo(newTodo) {
  try {
    const response = await fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });
    if (!response.ok) throw new Error("Ошибка при создании задачи");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка:", error);
  }
}
