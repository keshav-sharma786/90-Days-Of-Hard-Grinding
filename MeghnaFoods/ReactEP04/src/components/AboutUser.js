import UserDetailsClass from "./UserDetailsClass";
import React from "react";
import { Component } from "react";


class AboutUser extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  //~Suppose if the parent is also having the componentDidMount() method
  componentDidMount() {
    console.log("Parent Component Did Mount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About Class Component</h1>
        <UserDetailsClass name={"Keshav (class)"} location={"Noida (class)"} />
      </div>
    );
  }
}

export default AboutUser;
