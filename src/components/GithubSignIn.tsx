import {
  GithubAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebase";

const GithubSignIn = () => {
  const [user, setUser] = useState<User | null>(null);

  const provider = new GithubAuthProvider();

  const handleGithubSignIn = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      setUser(user);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      {!user && <div className="text-center font-medium">No user found</div>}
      {user && (
        <>
          <div className="text-center font-medium">{user.displayName}</div>
          <div className="text-center font-medium">{user.email}</div>
        </>
      )}
      {user ? (
        <button onClick={handleSignOut} className="bg-red-400 p-2 rounded">
          Sign Out
        </button>
      ) : (
        <button
          className="bg-orange-400 p-2 rounded"
          onClick={handleGithubSignIn}
        >
          Github SignIn
        </button>
      )}
    </div>
  );
};

export default GithubSignIn;
