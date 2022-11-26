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

class App extends Component {
  constructor(props) {
    super(props);
    const savedState = JSON.parse(window.localStorage.getItem("friends"));
    this.state = {
      friends: savedState || [],
    };
    this.addFriend = this.addFriend.bind(this);
    this.testParam = this.testParam.bind(this);

    this.handleCompliment = this.handleCompliment.bind(this);
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

  handleCompliment = (id, withNewCompliment) => {
    console.log(id);

    let updatedList = this.state.friends.map((item) => {
      if (item.id == id) {
        return { ...item, compliments: withNewCompliment };
      }
      return item; // else return unmodified item
    });

    this.setState({ friends: updatedList }, this.syncLocalStorage);
  };

  testParam(id, compliment) {
    let requiredName = this.state.friends.filter((i) => i.id == id);

    console.log(requiredName);
    console.log(id, compliment);
    let nameState = requiredName[0];
    let complimentState = nameState.compliments;
    let withNewCompliment = [...complimentState, compliment];
    this.handleCompliment(id, withNewCompliment);

    console.log(withNewCompliment);
  }

  render() {
    const properties = Object.keys(this.state.friends);
    console.log(properties);

    const values = Object.values(this.state.friends);

    const entries = Object.entries(this.state.friends);

    const findFriend = (id) =>
      this.state.friends.find((friend) => friend.id === id);

    const FriendWrapper = () => {
      const { id } = useParams();
      return (
        <FriendMain
          name={findFriend(id)}
          id={id}
          friendState={this.state.friends}
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
                  <div className="MainAreaInstructions">
                    <div className="InstructionsHeader">
                      {" "}
                      How to use this application:
                    </div>
                    <ul className="Instructions">
                      <li className="InstructionItem">
                        1. Add the names of who you'd like to compliment on the
                        left
                      </li>{" "}
                      <li className="InstructionItem">
                        2. Click the "Random Prompt" button to begin{" "}
                      </li>
                      <li className="InstructionItem">
                        3. Friend names and the nice things you've said about
                        them will be available in the dropdown menu{" "}
                      </li>
                    </ul>
                  </div>
                )
              }
            />

            <Route
              exact
              path="/Friend/:id"
              element={<FriendWrapper friendState={this.state.friends} />}
            />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
