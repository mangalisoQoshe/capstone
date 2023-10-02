import styles from "./Item.module.css";
import { TrashIcon } from "../../assets/Icons";

function Item({ announcement, deleteAnnouncement }) {
  return (
    <li className={styles["list-item"]}>
      <div className={styles.item}>
        <div className={styles.name}>{announcement.name}</div>
        <div>
          <button
            onClick={() => {
              deleteAnnouncement(announcement.id);
            }}
            className={styles.btn}
          >
            <TrashIcon />
          </button>
        </div>
      </div>
    </li>
  );
}

export default Item;
