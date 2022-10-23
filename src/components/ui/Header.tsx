import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import DarkModeToggler from "./DarkModeToggler";

const Header = () => {
  const userContext = useContext(UserContext);

  const handleSignOut = () => {
    userContext?.logOut().then(() => {});
  };

  return (
    <header className="h-16 bg-purple-500">
      <nav className="custom-width mx-auto flex h-full items-center justify-between ">
        <div className="text-lg font-semibold">Firebase</div>
        <ul className="flex gap-5 font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
          {userContext?.user && userContext.user.uid ? (
            <>
              <li className="cursor-pointer" onClick={handleSignOut}>
                Logout
              </li>
              {userContext.user?.displayName !== null && (
                <li className="cursor-pointer">
                  {userContext.user.displayName}
                </li>
              )}
            </>
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
          <li>
            <DarkModeToggler />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
