import Icosahedron from "../components/Icosahedron";
import TorusKnot from "../components/TorusKnot";
import Cube from "../components/Cube";
import Torus from "../components/Torus";
import OrbitControls from "../components/OrbitControls"
import React from "react";
import { Canvas } from "@react-three/fiber";
import css from '../styles/Home.module.css';

export default function VideoPlayer() {
  return (
    <div className={css.scene}>

      <Canvas
              shadows={true}
              className={css.canvas}
              camera={{
                position: [-6, 7, 60]
              }}
      >
         <color attach="background" args={["black"]} />
          <TorusKnot position={[0, 0, 30]} rotateX={1} rotateY={0.5} rotateZ={10} />
          <Icosahedron position={[-40, -50, -20]} />
          <Cube position={[40, 0, 20]} />
          <Torus rotateX={4} position={[0, -50, -50]} />
          <OrbitControls />
      </Canvas>
  </div>
  );
};
