import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase";

const useFirebase = () => {
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  return { handleGoogleLogin };
};

export default useFirebase;
