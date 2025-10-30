import { createContext } from "react";
// const About = new URL("../assets/About.png", import.meta.url);

const ImageContext = createContext({
  image: new URL("../assets/Burger2.png", import.meta.url),
});

// console.log(UserContext);

export default ImageContext;
