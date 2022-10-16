import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="h-16 bg-purple-500">
      <nav className="custom-width mx-auto flex h-full items-center justify-between ">
        <div>Firebase</div>
        <ul className="flex gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
