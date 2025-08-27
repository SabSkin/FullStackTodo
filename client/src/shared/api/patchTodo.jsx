export async function patchTodo(id, completed) {
  if (!id) return;
  try {
    const res = await fetch(`http://localhost:5000/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isCompleted: completed }),
    });

    if (!res.ok) throw new Error("Todo not found");
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}
