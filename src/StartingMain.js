import React, { Component } from "react";

import "./styles/MainArea.scss";
import "./styles/RandomInput.scss";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";

export default class StartingMain extends Component {
  constructor(props) {
    super(props);
    this.state = { complimentLine: "" };
  }

  changeTitle = () => {
    this.setState({ oneLine: "" });
    document.getElementById("StartingMain-Input").value = "";
  };

  reset = () => {
    setTimeout(this.setState({ complimentLine: "" }), 6000);
  };

  handleInputChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
    const names = this.props.friendState;

    let stateLine = [];

    let prompts = [
      "is so good at",

      "has the best",
      "is great at",
      "is a strong",
      "glows when they are",
      "makes everyones day by",
      "has taught me how to",
      "has great ideas for",
      "could show anyone how to",
      "has many skills when it comes to",
      "has a gift for",
      "has a refreshing perspective on",
      "is an awesome",
      "makes everyone feel",
      "is one of a kind at",
      "has a rare ability to",
      "brings joy to people by",
      "has a great eye for",
      "is a fantastic teammate when it comes to",
      "supports others by",
    ];

    function randomItem(items) {
      return items[Math.floor(Math.random() * items.length)];
    }

    let getName = randomItem(names);

    let getPrompts = randomItem(prompts);

    let name2 = getName.id;

    let somethingNice = `${getName.friendName} ${getPrompts}`;
    const findName = (id) =>
      this.props.friendState.find((friends) => friends.id === id);

    function handleRefresh() {
      let getName = randomItem(names);
      let getPrompts = randomItem(prompts);
      let something = `${getName.friendName} ${getPrompts}`;

      somethingNice = something;
    }

    function handleSubmit() {
      let input = document.getElementById("StartingMain-Input").value;
      let oneLine = `${somethingNice} ${input}`;

      stateLine.push(oneLine);
      let stateId = getName.id;

      document.getElementById("StartingMain-Input").value = "";
    }

    function handleAlert() {
      alert("Input must be at least two characters.");
    }

    return (
      <div className="MainArea">
        <div className="RandomInput">
          <div className="RandomInput-Content">
            <div className="RandomInput-OneLine">
              <div>{somethingNice}</div>

              <input
                id="StartingMain-Input"
                name="complimentLine"
                className="RandomInput-Field"
                onKeyDown={(e) => {
                  let x = e.code;
                  if (
                    x === "Enter" &&
                    document.getElementById("StartingMain-Input").value.length >
                      1
                  ) {
                    console.log("enter");
                    handleSubmit();

                    this.changeTitle();

                    this.props.testParam(getName.id, stateLine[0]);
                  } else if (x === "Enter") {
                    handleAlert();
                  }
                }}
              ></input>
            </div>
            <div className="MainArea-Buttons">
              <div className="Button-Refresh">
                <button
                  className="button-2"
                  onClick={handleRefresh}
                  onClick={this.changeTitle}
                >
                  Refresh
                </button>
              </div>
              <NavLink to="/">
                <button
                  type="submit"
                  className="button-2"
                  onClick={(e) => {
                    if (
                      document.getElementById("StartingMain-Input").value
                        .length > 1
                    ) {
                      handleSubmit();

                      this.changeTitle();

                      this.props.testParam(getName.id, stateLine[0]);
                    } else {
                      handleAlert();
                    }
                  }}
                >
                  Submit
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
