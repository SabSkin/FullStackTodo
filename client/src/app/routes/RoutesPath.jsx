import { Routes, Route } from "react-router-dom";
import { Auth, TodoItem, Todos, Create, Recover } from "../../pages";

const RoutesPath = () => {
  return (
    <Routes>
      <Route path="/authorization" element={<Auth />} />
      <Route path="/create-account" element={<Create />} />
      <Route path="/" element={<TodoItem />} />
      <Route path="/allTodo" element={<Todos />} />
      <Route path="/recover" element={<Recover />} />
    </Routes>
  );
};

export default RoutesPath;
