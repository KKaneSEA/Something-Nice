import React, { Component } from "react";

import { extend, Canvas } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";
import { Text } from "@react-three/drei";
import { HeaderText } from "./Header";
import { findByDisplayValue } from "@testing-library/dom";
import { findByTestId } from "@testing-library/dom";
import "./styles/FriendMain.scss";

export default class FriendMain extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   listedCompliments: [],
    // };
  }
  render() {
    const names = this.props.friendState;

    let requiredItem = names.filter((i) => i.id == this.props.id);

    let allComps = requiredItem.map((n) => n.compliments);

    let allItems = [];

    for (let i = 0; i < allComps.length; i++) {
      allItems = allComps[i];
    }

    console.log(allItems);

    let niceCompliments = allItems.map((n) => <h1 key={n}>{n}</h1>);

    let nameHeading = requiredItem.map((n) => (
      <h1 className="friendMain-compliments" key={n.friendName}>
        {n.friendName}
      </h1>
    ));

    return (
      <div>
        {nameHeading}
        {niceCompliments}
      </div>
    );
  }
}
