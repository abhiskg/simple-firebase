import { signInWithPopup, User } from "firebase/auth";
import { useState } from "react";
import { auth, provider } from "./firebase/firebase";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const handleSignIn = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      setUser(user);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={handleSignIn}>Google SignIn</button>
      {!user && <div>No user</div>}
      {user && (
        <>
          <div>{user.displayName}</div>
          <div>{user.email}</div>
        </>
      )}
    </div>
  );
}

export default App;
