import { signOut } from "firebase/auth";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { auth } from "../../firebase/firebase";
const Header = () => {
  const userContext = useContext(UserContext);

  const handleSignOut = () => {
    signOut(auth);
    userContext?.setUser(null);
  };

  return (
    <header className="h-16 bg-purple-500">
      <nav className="custom-width mx-auto flex h-full items-center justify-between ">
        <div className="text-lg font-semibold">Firebase</div>
        <ul className="flex gap-5 font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          {userContext?.user ? (
            <li onClick={handleSignOut}>Logout</li>
          ) : (
            <>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}

          {userContext?.user && <li>{userContext.user.displayName}</li>}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
