import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
    console.log("About constructor - Parent");
  }
  componentDidMount() {
    console.log("About  componentDidMount - Parent ");
  }
  render() {
    console.log("About render - Parent");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React web series.</h2>
        <UserClass name="Ayush (from Class)" location="Los Angeles (Class)" />
      </div>
    );
  }
}

export default About;
