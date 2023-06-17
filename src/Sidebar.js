import { extend, Canvas } from "@react-three/fiber";
import React, { Component, useRef } from "react";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { CameraShake } from "@react-three/drei";

import "./styles/Sidebar.scss";
import { useNavigate, NavLink, Link } from "react-router-dom";

import { HeaderText } from "./Header";
import { v4 as uuidv4 } from "uuid";
import Friends from "./Friends";
import FriendsDropDown from "./FriendsDropDown";

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
    return (
      <aside className="Sidebar">
        <div className="Siderbar-Container">
          <div className="Sidebar-Home">
            <NavLink to="/" className="buttonPromptLink">
              Random Prompt
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
              <h2 className="Friends-Heading">
                {this.props.friendState.length > 0 ? "Friends" : ""}
              </h2>

              <div className="AddFriends-Container">
                <div>
                  {
                    this.props.friendState.length > 0 ? (
                      <FriendsDropDown friendList={this.props.friendState} />
                    ) : (
                      ""
                    )

                    // <h1 className="AddFriends-Text">Add some friends!</h1>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}
