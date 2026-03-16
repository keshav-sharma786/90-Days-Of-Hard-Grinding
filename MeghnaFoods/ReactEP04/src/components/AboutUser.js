import UserDetails from "./UserDetails";
import UserDetailsClass from "./UserDetailsClass";

const AboutUser = () => {
  console.log(<UserDetailsClass name={"Keshav (class)"} />);
  return (
    <div>
      <UserDetails name={"Keshav (function)"} />
      <UserDetailsClass name={"Keshav (class)"} />
    </div>
  );
};

export default AboutUser;
