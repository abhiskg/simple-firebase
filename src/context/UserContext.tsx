import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  User,
  UserCredential,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

interface UserContextProps {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  updateUser: (name: string, user: User) => Promise<void>;
  signInWithGoogle: () => Promise<UserCredential>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext<null | UserContextProps>(null);

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null || currentUser?.emailVerified) {
        console.log(currentUser);
        console.log("inside");
        setUser(currentUser);
      }
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const signUp = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (name: string, user: User) => {
    setLoading(true);
    return updateProfile(user, {
      displayName: name,
    });
  };

  const signIn = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        setLoading,
        signIn,
        logOut,
        signUp,
        updateUser,
        signInWithGoogle,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
