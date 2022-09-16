import React from 'react';
import styles from "./LearnVideo.module.css";

export default function Video (props) {
  return(
    <figure class="videocontainer" className={styles.videocontainer}>
      <iframe
        className={styles.iframeround}
        src={props.link}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </figure>
  );
};