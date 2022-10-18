import React, { Component } from "react";
import { Link, useRoutes } from "react-router-dom";
import "./styles/Sidebar.scss";
import DownArrow from "./img/arrow_drop_down.svg";

export default class FriendsDropDown extends Component {
  render() {
    const names = this.props.friendList;
    return (
      <div className="dropdown">
        <button className="dropbtn">
          <img src={DownArrow} alt="Arrow" />
        </button>
        <div className="dropdown-content">
          {names.map((n) => (
            <Link key={n.id} id={n.id} to={`/Friend/${n.id}`}>
              <a key={n.id} value={n.friendName}>
                {n.friendName}{" "}
              </a>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
