import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../shared/ui/styles/TodoItem.module.css";
import Icon from "../shared/ui/img/Icon.svg";
import { LuListTodo } from "react-icons/lu";
import { IoIosHome } from "react-icons/io";
import { RiAccountPinBoxLine } from "react-icons/ri";
import Clipboard from "../widgets/Clipboard";
import { addTodo } from "../shared/api/AddTodo";
import { getTodo } from "../shared/api/getTodo";

import NewTodos from "./NewTodos";
import { useTodosStore } from "../shared/store/useTodosStore";

const TodoItem = () => {
  const [total, setTotal] = useState(0);
  const [todos, setTodos] = useState(0);
  const [todoText, setTodoText] = useState("");
  const { newTodos, addNewTodo } = useTodosStore((state) => state);
  const navigate = useNavigate();

  const icons = [
    { icon: <IoIosHome />, label: "Home", path: "/" },
    { icon: <LuListTodo />, label: "Todos", path: "/todos" },
    { icon: <RiAccountPinBoxLine />, label: "Account", path: "/authorization" },
  ];

  const today = new Date();
  const formattedDate = `${today.getDate()}.${
    today.getMonth() + 1
  }.${today.getFullYear()}`;

  const handleAddTodo = async () => {
    const todo = {
      data: formattedDate,
      text: todoText,
      isCompleted: false,
    };

    const savedTodo = await addTodo(todo);
    if (savedTodo) addNewTodo(savedTodo);
    setTodoText("");
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Add Todos</h1>
        <img src={Icon} alt="icon" />
      </div>

      <div className={styles.buttons}>
        {icons.map((item, index) => (
          <div key={index} className={styles.iconWrapper}>
            <button onClick={() => navigate(item.path)}>{item.icon}</button>
            <span className={styles.tooltip}>{item.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Add a new task"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button onClick={() => handleAddTodo()}>Add</button>
      </div>

      <div className={styles.stats}>
        <p>
          Tasks created <span>{total}</span>
        </p>
        <p>
          Completed <span>{todos}</span>
        </p>
      </div>

      {newTodos.length === 0 ? (
        <Clipboard styles={styles.empty} />
      ) : (
        <NewTodos />
      )}
    </div>
  );
};

export default TodoItem;
