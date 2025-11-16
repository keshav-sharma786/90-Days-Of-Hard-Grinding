// Again creating a custom hook
import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  // input to this custom hook is nothing
  // check if online
  // to check weather we are online or offline we will use an event listener i.e window.online event
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  // onlineStatus is basically a boolean value

  return onlineStatus;
};

export default useOnlineStatus;
