import ClipboardImg from "../shared/ui/img/Clipboard.svg";
const Clipboard = ({ styles }) => {
  return (
    <div className={styles}>
      <hr />
      <img src={ClipboardImg} alt="clipboard" />
      <p>
        You have no tasks registered yet
        <br />
        Create tasks and organize your To-Dos
      </p>
    </div>
  );
};

export default Clipboard;
