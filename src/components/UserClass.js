import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor called()");
    this.state = {
      // state variables defined
      name: "",
      location: "",
      imageURL: "https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png", // dummy user image till actual image from API loads
    };
  }
  async componentDidMount() {
    // componentDidMount function made async
    console.log("componentDidMount() called");
    const data = await fetch("https://api.github.com/users/ayushbhardwaj10");
    const json = await data.json();
    console.log(json);
    this.setState({
      // updating state variables to re-render the UI
      name: json.name,
      location: json.location,
      imageURL: json.avatar_url,
    });
  }
  componentDidUpdate() {
    console.log("componentDidUpdate() called");
  }
  componentWillUnmount() {
    console.log("componentWillUnMount() called");
  }
  render() {
    console.log("render() called");
    const { name, location, imageURL } = this.state; // destructuring the state object.
    return (
      <div className="user-card">
        <img className="user-image" src={imageURL} alt="no image of user" />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : ayushb@usc.edu</h4>
      </div>
    );
  }
}
export default UserClass;
