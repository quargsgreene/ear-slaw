import React, { useState } from "react";


function Cube(props: any) {
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = require('./astwed226011.mp4');
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = false;
    vid.play();
    return vid;
  });

  return (
    <mesh {...props} recieveShadow={true} castShadow={true}>
      <boxBufferGeometry args={[5, 15, 15, 1, 1, 1]} />
      <meshBasicMaterial>
        <videoTexture attach="map" args={[video]} />
      </meshBasicMaterial>
    </mesh>
  );
};
export default Cube;