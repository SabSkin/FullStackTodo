export async function handleNewUser(newUser) {
  try {
    const response = await fetch("http://localhost:5000/create-account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      throw new Error("Ошибка при создании пользователя");
    }

    const data = await response.json();
    console.log("User created:", data);
  } catch (error) {
    console.error("Ошибка:", error);
  }
}
