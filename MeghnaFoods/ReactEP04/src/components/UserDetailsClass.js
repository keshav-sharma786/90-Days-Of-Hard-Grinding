import React from "react";

class UserDetailsClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this);

    //~Creating state variables inside the class based component
    this.state = {
      count: 0,
    };
    // console.log(this);
    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Child Component Did Mount");
  }

  render() {
    console.log("Child Render");
    //destructuring name and location from this.props
    const { name, location } = this.props;
    const { count } = this.state;
    //~render is a method in the class based components which return some piece of JSX
    return (
      <div className="p-10 text-white font-bold text-2xl border-2 border-solid border-white mt-6">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            //~I will basically update my state variable.
            //~Never update state variables directly.
            //~Basically React gives you access to an important function which is known as this.setState and you can use this this.setState anywhere inside your class
            //~Over here in this this.setState, I will basically pass in an object, this object will basically contain the updated value of your state variables
            //~And whenever this setState will update the count,react will re-render this class Based component and it is just changing the count value.
            //~Basically React will just change the count portion of the HTML.
            this.setState({
              count: this.state.count + 1,
              //~updating the second state variable i.e count2
              // count2: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @iamkeshavsharma</h4>
      </div>
    );
  }
}

export default UserDetailsClass;
