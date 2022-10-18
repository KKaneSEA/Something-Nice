import React, { Component, useState } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

import "./styles/App.scss";
import "./styles/Body.scss";
import "./styles/MainArea.scss";
import "./styles/RandomInput.scss";
import Header from "./Header";
import Sidebar from "./Sidebar";

import StartingMain from "./StartingMain";
import FriendMain from "./FriendMain";

import { v4 as uuidv4 } from "uuid";

// function App()
class App extends Component {
  constructor(props) {
    super(props);
    const savedState = JSON.parse(window.localStorage.getItem("friends"));
    this.state = {
      friends:
        savedState ||
        [
          // {
          //   friendName: "Al",
          //   id: uuidv4(),
          //   compliments: ["oh", "dkjds"],
          // },
          // {
          //   friendName: "True",
          //   id: uuidv4(),
          //   compliments: ["dhhd", "dhhsdh"],
          // },
        ],
    };
    this.addFriend = this.addFriend.bind(this);
    this.testParam = this.testParam.bind(this);

    // this.findId = this.findId.bind(this);
  }

  addFriend(newFriend) {
    this.setState(
      { friends: [...this.state.friends, newFriend] },
      this.syncLocalStorage
    );
  }

  syncLocalStorage() {
    window.localStorage.setItem("friends", JSON.stringify(this.state.friends));
  }
  testParam(id, compliment) {
    let requiredName = this.state.friends.filter((i) => i.id == id);

    console.log(requiredName);
    console.log(id, compliment);
    // this.setState({
    //   rquiredName.compliments: [...this.state.requiredName.compliments, compliment],
    // });
    // this.setState((requiredName.compliments) => ({
    //   compliments: [...requiredName.compliments, compliment],
    // }));
    const findF = (requiredName) =>
      this.state.friends.find((friend) => friend.id === requiredName.id);
    let allCompsF = requiredName.map((n) => n.compliments);
    console.log(allCompsF);
    let nameState = requiredName[0];
    // .compliments;
    // this.setState({ compliments: compliment });
    console.log(requiredName[0]);
    console.log(nameState);
    let complimentArray = nameState.compliments;
    console.log(complimentArray);
    console.log(nameState.compliments);

    console.log(nameState);
  }

  // findId(id) {
  //   this.setState({
  //     friends: this.state.friends.filter((n) => n.id !== id),
  //   });
  // }

  render() {
    const properties = Object.keys(this.state.friends);
    console.log(properties);

    const values = Object.values(this.state.friends);
    console.log(values);

    const entries = Object.entries(this.state.friends);
    console.log(entries);
    console.log("right here");

    for (const [key, { friendName, compliments }] of entries) {
      console.log(`${friendName} wooo is ${compliments}`);
    }

    const findFriend = (id) =>
      this.state.friends.find((friend) => friend.id === id);

    // const findCompliments = (compliments) =>
    //   this.state.friends.find((friend) => friend.compliments === compliments);

    const FriendWrapper = () => {
      const { id } = useParams();
      return (
        <FriendMain
          name={findFriend(id)}
          id={id}
          friendState={this.state.friends}
          // findId={this.findId}
          // compliments={findCompliments(id)}
        />
      );
    };

    return (
      <div className="App">
        <Header />

        <div className="Body">
          <Sidebar
            friendState={this.state.friends}
            addFriend={this.addFriend}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                this.state.friends.length > 0 ? (
                  <StartingMain
                    friendState={this.state.friends}
                    testParam={this.testParam}
                  />
                ) : (
                  <div className="MainArea"></div>
                )
              }
            />

            <Route
              exact
              path="/Friend/:id"
              // render={getName}
              element={
                <FriendWrapper
                  // findId={this.findId}
                  friendState={this.state.friends}
                />
              }
            />
          </Routes>
        </div>
      </div>
      //{" "}
    );
  }
}

export default App;
