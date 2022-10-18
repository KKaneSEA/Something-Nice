import React, { Component } from "react";

import "./styles/MainArea.scss";
import "./styles/RandomInput.scss";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";

export default class StartingMain extends Component {
  constructor(props) {
    super(props);
    this.state = { complimentLine: "" };
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleTestParam = this.handleTestParam.bind(this);
    // this.addTesters = this.addTesters.bind(this);
  }

  // stateLine = "";
  // stateId = "";

  // handleTestParam(name, line) {
  //   this.props.testParam(name, line);
  // }

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

  // handleCompliment() {
  //   this.props.testParam(this.state);
  // }

  // sendCompliment() {
  //   this.setState({ idState: stateId, complimentLine: stateLine });
  //   console.log(this.state.idState);
  // }

  // handleSubmit() {
  //   let input = document.getElementById("StartingMain-Input").value;
  //   let oneLine = `${somethingNice} ${input}`;
  //   console.log(oneLine);

  //   // if (input.length > 1) niceOneLine.push(oneLine);
  //   // else alert("Input must be at least two characters.");
  //   // console.log(niceOneLine);
  //   // // this.setState({ friendNames: friendNames });
  //   // document.getElementById("StartingMain-Input").value = "";
  // }

  //outside render

  // names = this.props.friendState;
  // stateLine = "";
  // prompts = ["is so good at", "knows how to", "is great at"];

  // randomItem(items) {
  //   return items[Math.floor(Math.random() * items.length)];
  // }

  // getName = randomItem(names);
  // getPrompts = randomItem(prompts);

  // name2 = getName.id;

  // somethingNice = `${getName.friendName} ${getPrompts}`;

  // handleSubmit() {
  //   let input = document.getElementById("StartingMain-Input").value;
  //   let oneLine = `${somethingNice} ${input}`;
  //   stateLine = oneLine;

  //   if (input.length > 1) console.log(oneLine);
  //   else alert("Input must be at least two characters.");
  //   console.log(`${getName.id} ${getName.friendName}`);
  //   this.props.testParam(`${getName.friendName}, ${oneLine} `);

  //   document.getElementById("StartingMain-Input").value = "";
  // }

  render() {
    const names = this.props.friendState;
    // let stateLine;
    let stateLine = [];

    let prompts = ["is so good at", "knows how to", "is great at"];

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
      // let stateLine = oneLine;
      stateLine.push(oneLine);
      let stateId = getName.id;

      if (input.length > 1) console.log(oneLine);
      else alert("Input must be at least two characters.");
      console.log(`${getName.id} ${getName.friendName}`);

      document.getElementById("StartingMain-Input").value = "";
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
                // onChange={this.handleInputChange}
              ></input>
            </div>
            <div className="MainArea-Buttons">
              <div className="Button-Refresh">
                <button
                  // className="RandomInput-Button Metal"
                  className="button-2"
                  onClick={handleRefresh}
                  onClick={this.changeTitle}
                >
                  Refresh
                </button>
              </div>
              <NavLink to="/">
                <button
                  className="button-2"
                  onClick={(e) => {
                    handleSubmit();

                    this.changeTitle();

                    this.props.testParam(getName.id, stateLine[0]);
                  }}
                  // onClick={this.handleTestParam.bind(
                  //   this,
                  //   getName.friendName,
                  //   stateLine
                  // )}
                >
                  {/* //   onClick={setTimeout(function () {
                //     <NavLink to="/" />;
                //   }, 20000)}
                // > */}
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
