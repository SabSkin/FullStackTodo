export async function addTodo(newTodo) {
  try {
    const response = await fetch("http://localhost:5000/addTodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    if (!response.ok) {
      throw new Error("Ошибка при создании задачи");
    }
    const data = await response.json();
    console.log("Todo created:", data);
  } catch (error) {
    console.error("Ошибка:", error);
  }
}
