import styles from "./Announcement.module.css";
import AnnouncementList from "./AnnouncementList";
import InputForm from "./InputForm";

function Announcement({announcements,deleteAnnouncement,addAnnouncement}) {
  return (
    <div className={styles.announcement}>
      <h1>My Announcements</h1>
      <InputForm addAnnouncement={addAnnouncement} />
      <AnnouncementList
        announcements={announcements}
        deleteAnnouncement={deleteAnnouncement}
      />
    </div>
  );
}

export default Announcement;
