import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { auth } from "../firebase/firebase";

const Home = () => {
  useEffect(() => {
    if (!userContext?.user) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user);
          console.log("inside");
          userContext?.setUser(user);
        } else {
        }
      });
    }
  }, []);
  const userContext = useContext(UserContext);
  return <div>Home</div>;
};

export default Home;
