import { useTodosStore } from "../shared/store/useTodosStore";
import { MdOutlineDelete } from "react-icons/md";
import styles from "../shared/ui/styles/NewTodos.module.css";
import { useState } from "react";
import { patchTodo } from "../shared/api/patchTodo";

const NewTodos = () => {
  const { newTodos } = useTodosStore((state) => state);
  const [completed, setCompleted] = useState(() =>
    newTodos.reduce((acc, todo) => {
      if (todo && todo.id) acc[todo.id] = todo.isCompleted;
      return acc;
    }, {})
  );

  const toggleComplete = async (id) => {
    const newStatus = !completed[id];
    setCompleted((prev) => ({ ...prev, [id]: newStatus }));
    await patchTodo(id, newStatus);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>New Todo in Today</h1>

      <div className={styles.list}>
        {newTodos
          .filter((t) => t && t.id)
          .map((item) => (
            <div key={item.id} className={styles.item}>
              <input
                type="checkbox"
                checked={!!completed[item.id]}
                onChange={() => toggleComplete(item.id)}
                className={styles.checkbox}
              />
              <p
                className={`${styles.text} ${
                  completed[item.id] ? styles.completed : ""
                }`}
              >
                {item.text}
              </p>
              <button className={styles.deleteBtn}>
                <MdOutlineDelete size={20} />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewTodos;
