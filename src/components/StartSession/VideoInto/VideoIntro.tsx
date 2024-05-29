import React from "react";
import ReactPlayer from "react-player";
import { videoUrl } from "../../../utils/default";
import styles from "./styles.module.scss";

interface Props {
  title: string;
}

const VideoInto: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{props.title}</span>
      {/* <div className={styles.videoContainer}> */}
      <ReactPlayer
        url={videoUrl}
        controls={true}
        width={"397px"}
        height={"216px"}
        style={{
          width: "397px",
          borderRadius: "8px",
          overflow: "hidden",
          objectFit: "contain",
        }}
      />
      {/* </div> */}
    </div>
  );
};

export default VideoInto;
