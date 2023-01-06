import React, { useState } from "react";

function Torus(props: any) {
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = require('./ 22201010rcperehiy.mp4');
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = false;
    vid.play();
    return vid;
  });

  return (
    <mesh {...props} recieveShadow={true} castShadow={true}>
      <torusGeometry args={[15, 3, 30, 200, 6.3]} />
      <meshBasicMaterial>
      <videoTexture attach="map" args={[video]} />
      </meshBasicMaterial>
    </mesh>
  );
};
export default Torus;