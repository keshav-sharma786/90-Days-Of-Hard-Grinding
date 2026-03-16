import React from "react";

class UserDetailsClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
    // this.props = props;
    console.log(props);
    console.log(this.props); //!undefined
  }

  render() {
    console.log("render");
    //~render is a method in the class based components which return some piece of JSX
    return (
      <div className="p-10 text-white font-bold text-2xl border-2 border-solid border-white mt-6">
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Noida</h3>
        <h4>Contact: @iamkeshavsharma</h4>
      </div>
    );
  }
}

export default UserDetailsClass;
