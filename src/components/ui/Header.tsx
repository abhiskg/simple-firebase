import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
const Header = () => {
  return (
    <header className="h-16 bg-purple-500">
      <nav className="custom-width mx-auto flex h-full items-center justify-between ">
        <div className="text-lg font-semibold">Firebase</div>
        <ul className="flex gap-5 font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li onClick={() => signOut(auth)}>Logout</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
