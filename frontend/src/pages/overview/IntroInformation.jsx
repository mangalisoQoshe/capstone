import { Link } from "react-router-dom";
import VideoFeed from "../../components/video-feed/VideoFeed";
import { Asterisk } from "../../assets/Icons";
import styles from "./IntroInformation.module.css";

function IntroInformation() {
  return (
    <div className={styles["intro-Info-container"]}>
      <div className={styles["intro-container"]}>
        <h1 className={styles["intro-title"]}>
          Leading the Way in Sustainability
        </h1>
        <img
          className={styles["dschool-logo"]}
          src="../src/assets/dschool-logo-new-colour.png"
          alt="D-school logo"
        />
        <h2 className={styles["intro-title-2"]}>
          South Africa{"'"}s First Green 6 Star Academic Building
        </h2>
      </div>
      <div className={styles["building-info"]}>
        <div className={styles["video-feed"]}>
          <VideoFeed />
        </div>
        <div className={styles.info}>
          <h2>D-school information</h2>
          <p style={{marginBottom:"2rem"}}>
            The leaders of excellence in design-led thinking on the continent.
          </p>
          <ul>
            <li> <Asterisk/> Text Placeholder 1</li>
            <li><Asterisk/> Text Placeholder 2</li>
          </ul>
          <p  style={{marginTop:"2rem"}}>
           Visit <Link className={styles.link} to="https://dschoolafrika.org/">D-School</Link> Website
            for more information
          </p>
        </div>
      </div>
    </div>
  );
}

export default IntroInformation;
