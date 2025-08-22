import { Routes, Route } from "react-router-dom";
import { Auth, TodoItem, Todos, Create } from "../../pages";

const RoutesPath = () => {
  return (
    <Routes>
      <Route path="/authorization" element={<Auth />} />
      <Route path="/create-account" element={<Create />} />
      <Route path="/" element={<TodoItem />} />
      <Route path="/allTodo" element={<Todos />} />
    </Routes>
  );
};

export default RoutesPath;
