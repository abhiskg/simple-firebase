import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Header = () => {
  const userContext = useContext(UserContext);
  const location = useLocation();

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
          {userContext?.user ? (
            <li onClick={handleSignOut}>Logout</li>
          ) : (
            <>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login" state={{ prev: location.pathname }}>
                  Login
                </Link>
              </li>
            </>
          )}

          {userContext?.user && <li>{userContext.user.displayName}</li>}
          <li>
            <Link to="/order">Order</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
