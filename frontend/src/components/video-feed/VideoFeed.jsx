import styles from "./VideoFeed.module.css";
import { useEffect, useRef } from "react";

function VideoFeed() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video !== null) {
     video.play();
    }

    return () => {
      // Cleanup code when the component unmounts (optional)
      if (video !== null) {
        video.pause();
      }
    };
  }, []);

  return (
    <div className={styles["video"]}>
      <video
        ref={videoRef}
        src="https://dschoolafrika.org/wp-content/uploads/revslider/slider-1/Websitevideo-Resizedog.mp4"
        loop
        muted
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default VideoFeed;
