import "../../index.css";

const User = (props) => {
  return (
    <div className="user-card">
      <h2>Name :{props.name} </h2>
      <h3>Location : Los Angeles</h3>
      <h4>Contact : ayushb@usc.edu</h4>
    </div>
  );
};

export default User;
