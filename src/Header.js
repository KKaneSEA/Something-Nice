import { Canvas, useFrame } from "@react-three/fiber";
import React, { Component, useRef } from "react";

import { OrbitControls, useGLTF } from "@react-three/drei";

import { CameraShake } from "@react-three/drei";
import "./styles/Header.scss";

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/text-3d-texture.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.3}>
        <mesh
          geometry={nodes["3D_Text_-_S"].geometry}
          material={materials.Bitter}
          position={[-14.06, 1.22, 1.56]}
          scale={[0.09, 0.07, 0.12]}
        />
        <mesh
          geometry={nodes["3D_Text_-_o"].geometry}
          material={materials.Bitter}
          position={[-11.94, 1.22, 1.56]}
          scale={[0.09, 0.07, 0.12]}
        />
        <mesh
          geometry={nodes["3D_Text_-_m"].geometry}
          material={materials.Bitter}
          position={[-9.81, 1.22, 1.56]}
          scale={[0.09, 0.07, 0.12]}
        />
        <mesh
          geometry={nodes["3D_Text_-_e"].geometry}
          material={materials.Bitter}
          position={[-6.48, 1.22, 1.56]}
          scale={[0.09, 0.07, 0.12]}
        />
        <mesh
          geometry={nodes["3D_Text_-_e_1"].geometry}
          material={materials.Bitter}
          position={[11.92, 1.22, 1.56]}
          scale={[0.09, 0.07, 0.12]}
        />
        <mesh
          geometry={nodes["3D_Text_-_t"].geometry}
          material={materials.Bitter}
          position={[-4.56, 1.22, 1.56]}
          scale={[0.09, 0.07, 0.12]}
        />
        <mesh
          geometry={nodes["3D_Text_-_h"].geometry}
          material={materials.Bitter}
          position={[-3.16, 1.22, 1.56]}
          scale={[0.09, 0.07, 0.12]}
        />
        <mesh
          geometry={nodes["3D_Text_-_i"].geometry}
          material={materials.Bitter}
          position={[-0.96, 1.22, 1.56]}
          scale={[0.09, 0.07, 0.12]}
        />
        <mesh
          geometry={nodes["3D_Text_-_i_1"].geometry}
          material={materials.Bitter}
          position={[8.85, 1.22, 1.56]}
          scale={[0.09, 0.07, 0.12]}
        />
        <mesh
          geometry={nodes["3D_Text_-_n"].geometry}
          material={materials.Bitter}
          position={[0.2, 1.22, 1.56]}
          scale={[0.09, 0.07, 0.12]}
        />
        <mesh
          geometry={nodes["3D_Text_-_g"].geometry}
          material={materials.Bitter}
          position={[2.43, 1.22, 1.56]}
          scale={[0.09, 0.07, 0.12]}
        />
        <mesh
          geometry={nodes["3D_Text_-_N"].geometry}
          material={materials.Bitter}
          position={[5.47, 1.22, 1.56]}
          scale={[0.09, 0.07, 0.12]}
        />
        <mesh
          geometry={nodes["3D_Text_-_c"].geometry}
          material={materials.Bitter}
          position={[10, 1.22, 1.56]}
          scale={[0.09, 0.07, 0.12]}
        />
      </group>
    </group>
  );
}

function HeaderText() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />

      <meshLambertMaterial attach="material" color="blue" />
    </mesh>
  );
}

export default class Header extends Component {
  render() {
    const config = {
      maxYaw: 1.0, // Max amount camera can yaw in either direction
      maxPitch: 0.1, // Max amount camera can pitch in either direction
      maxRoll: 0.1, // Max amount camera can roll in either direction
      yawFrequency: -0.2, // Frequency of the the yaw rotation
      pitchFrequency: 0.6, // Frequency of the pitch rotation
      rollFrequency: 0.6, // Frequency of the roll rotation
      intensity: 0.5, // initial intensity of the shake
      decay: false, // should the intensity decay over time
      decayRate: 9.65, // if decay = true this is the rate at which intensity will reduce at
      controls: undefined, // if using orbit controls, pass a ref here so we can update the rotation
    };
    return (
      <Canvas className="Header" camera={{ fov: 30, position: [0, 20, 35] }}>
        <CameraShake {...config} />

        <ambientLight intensity={0.5} color={"white"} />
        <spotLight position={[60, 900, -9]} color={"white"} angle={10.9} />
        <Model />
      </Canvas>
    );
  }
}

export { HeaderText };
