import { extend, Canvas } from "@react-three/fiber";
import React, { Component, useRef } from "react";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { CameraShake } from "@react-three/drei";

import "./styles/Sidebar.scss";
import { NavLink, Link } from "react-router-dom";

import { HeaderText } from "./Header";
import { v4 as uuidv4 } from "uuid";
import Friends from "./Friends";
import FriendsDropDown from "./FriendsDropDown";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/text-3d-texture2.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={2}>
        <mesh
          geometry={nodes["3D_Text_-_"].geometry}
          material={materials.Bitter}
          position={[2.46, -2.89, 5.49]}
          rotation={[2.37, 1.48, -2.46]}
          scale={[0.09, 0.01, 0.12]}
        />
        <mesh
          geometry={nodes["3D_Text_-_)"].geometry}
          material={materials.Bitter}
          position={[2.31, -3.1, 3.29]}
          rotation={[2.37, 1.48, -2.46]}
          scale={[0.09, 0.01, 0.12]}
        />
      </group>
    </group>
  );
}

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendName: "",
      id: uuidv4(),
      compliments: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    // evt.preventDefault();
    if (this.state.friendName.length > 1) this.props.addFriend(this.state);
    else alert("Input must be at least two characters.");

    this.setState({ friendName: "", id: uuidv4(), compliments: [] });
  }

  render() {
    const config = {
      maxYaw: 1.6, // Max amount camera can yaw in either direction
      maxPitch: 0.2, // Max amount camera can pitch in either direction
      maxRoll: 0.6, // Max amount camera can roll in either direction
      yawFrequency: 0.9, // Frequency of the the yaw rotation
      pitchFrequency: 0.9, // Frequency of the pitch rotation
      rollFrequency: 0.1, // Frequency of the roll rotation
      intensity: 0.3, // initial intensity of the shake
      decay: false, // should the intensity decay over time
      decayRate: 0.65, // if decay = true this is the rate at which intensity will reduce at
      controls: undefined, // if using orbit controls, pass a ref here so we can update the rotation
    };

    return (
      <aside className="Sidebar">
        {/* <Canvas
          className="Sidebar-Container"
          camera={{ fov: 29, position: [70, -3, 90] }}
        >
          <CameraShake {...config} />

          <ambientLight intensity={3.5} color={"orange"} />
          <spotLight position={[19, 15, 10]} angle={10.3} color={"white"} />
          <Model />
        </Canvas> */}

        <div className="Siderbar-Container">
          <div className="Sidebar-Home">
            <NavLink to="/" className="buttonPromptLink">
              {" "}
              <button className="buttonPrompt">Random Prompt</button>{" "}
            </NavLink>
          </div>
          <div className="Sidebar-Add-Container">
            <input
              type="text"
              placeholder="add friend..."
              value={this.state.friendName}
              id={this.state.friendName}
              name="friendName"
              onChange={this.handleChange}
              className="Sidebar-Input"
              onKeyDown={(e) => {
                let x = e.code;
                if (x === "Enter") {
                  console.log("enter submitted");

                  this.handleSubmit();
                }
              }}
            ></input>
            <button
              className="Sidebar-Input-Button"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>

          <div className="Sidebar-Friends">
            <div className="Friends-Container">
              <h1 className="Friends-Heading">
                {this.props.friendState.length > 0 ? "Friends" : ""}
              </h1>
              <div className="AddFriends-Container">
                {this.props.friendState.length > 0 ? (
                  <FriendsDropDown friendList={this.props.friendState} />
                ) : (
                  <h1 className="AddFriends-Text">Add some friends!</h1>
                )}
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}
