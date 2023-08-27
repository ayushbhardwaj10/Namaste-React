import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // check if online
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", function () {
      setOnlineStatus(true);
    });
  }, []);

  // return boolean value;
  return onlineStatus;
};

export default useOnlineStatus;
