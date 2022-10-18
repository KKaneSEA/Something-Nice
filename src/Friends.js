import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/Sidebar.scss";

export default class Friends extends Component {
  render() {
    const names = this.props.friendList;
    return (
      <div>
        <ul className="SidebarFriendLink">
          {names.map((n) => (
            <Link key={n.id} id={n.id} to={`/Friend/${n.id}`}>
              <li key={n.id}>{n.friendName}</li>{" "}
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}
