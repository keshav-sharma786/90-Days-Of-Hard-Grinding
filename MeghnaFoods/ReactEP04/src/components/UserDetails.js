const UserDetails = (props) => {
  return (
    //~Let us see how we can write this UserDetails Component using classbased Component
    <div className="p-10 text-white font-bold text-2xl border-2 border-solid border-white mt-6">
      <h2>Name: {props.name}</h2>
      <h3>Location: Noida</h3>
      <h4>Contact: @iamkeshavsharma</h4>
    </div>
  );
};

export default UserDetails;
