import React, { useState } from "react";
import styles from '../styles/Home.module.css';
import VideoPlayer from "../components/VideoPlayer";

export default function Display (props: any) {
  const [canvas, startCanvas] = useState(false);

  return (
      canvas ? <VideoPlayer /> : <button onClick={() => startCanvas(true)} className={styles.button}>Start</button>
  )
}