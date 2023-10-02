import styles from "./InputForm.module.css";
import { PlusIcon } from "../../assets/Icons";
import { useState } from "react";

function InputForm({ addAnnouncement }) {
  const [inputText, setInputText] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    addAnnouncement( {name: inputText, id: Date.now() });
    setInputText("");
  };
  return (
    <div >
      <form onSubmit={handleForm} className={styles.form}>
        <input
          type="text"
          placeholder="Enter Announcement"
          autoComplete="off"
          autoFocus
          name="anouncement"
          required
          value={inputText}
          onInput={(e) => setInputText(e.target.value)}
          className={styles.input}
        />
        <button className={styles.btn}>
          <PlusIcon />
        </button>
      </form>
    </div>
  );
}

export default InputForm;
