import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../shared/ui/styles/TodoItem.module.css";
import Icon from "../shared/ui/img/Icon.svg";
import Clipboard from "../shared/ui/img/Clipboard.svg";
import { LuListTodo } from "react-icons/lu";
import { IoIosHome } from "react-icons/io";
import { RiAccountPinBoxLine } from "react-icons/ri";

const TodoItem = () => {
  const [total, setTotal] = useState(0);
  const [todo, setTodo] = useState(0);
  const navigate = useNavigate();

  const icons = [
    { icon: <IoIosHome />, label: "Home", path: "/" },
    { icon: <LuListTodo />, label: "Todos", path: "/todos" },
    { icon: <RiAccountPinBoxLine />, label: "Account", path: "/authorization" },
  ];

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
        <input type="text" placeholder="Add a new task" />
        <button>Add</button>
      </div>

      <div className={styles.stats}>
        <p>
          Tasks created <span>{total}</span>
        </p>
        <p>
          Completed <span>{todo}</span>
        </p>
      </div>

      <div className={styles.empty}>
        <hr />
        <img src={Clipboard} alt="clipboard" />
        <p>
          You have no tasks registered yet
          <br />
          Create tasks and organize your To-Dos
        </p>
      </div>
    </div>
  );
};

export default TodoItem;
