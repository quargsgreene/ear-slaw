import React, { useState } from "react";

function TorusKnot(props: any) {
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = require('./402122209917.mp4');
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = false;
    vid.play();
    return vid;
  });

  return (
    <mesh {...props} recieveShadow={true} castShadow={true}>
      <torusKnotGeometry args={[15, 3, 300, 3, 1, 7]} />
      <meshBasicMaterial>
      <videoTexture attach="map" args={[video]} />
      </meshBasicMaterial>
    </mesh>
  );
};
export default TorusKnot;