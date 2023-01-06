import React, { useState } from "react";

function Icosahedron (props: any){
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = require('./lapexspea82222110.mp4');
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = false;
    vid.play();
    return vid;
  });

  return(
    <mesh {...props} receiveShadow={true} castShadow={true}>
      <icosahedronGeometry args={[15, 0]} />
      <meshBasicMaterial>
        <videoTexture attach="map" args={[video]} />
      </meshBasicMaterial>
    </mesh>
  )
}

export default Icosahedron;

