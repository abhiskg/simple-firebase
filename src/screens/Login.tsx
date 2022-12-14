import { useState, useRef, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const emailRef = useRef<HTMLInputElement>(null!);

  const userContext = useContext(UserContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleEmail = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setError("Please type your Email");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(e.target.value)) {
      setError("Please type a correct email");
      return;
    }
    setEmail(e.target.value);
    setError("");
  };

  const handlePassword = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setError("Please type your Password");
      return;
    }
    setPassword(e.target.value);
    setError("");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email && !password) {
      setError("Fill all the fields");
      return;
    }

    userContext
      ?.signIn(email, password)
      .then(({ user }) => {
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error("Please Verify your Email");
        }
      })
      .catch((error: any) => {
        console.log(error);
        setError(error.message);
      })
      .finally(() => {
        userContext.setLoading(false);
      });

    // setEmail("");
    // setPassword("");
  };

  return (
    <div className="custom-width mx-auto mt-10 flex justify-center ">
      <div>
        <h1 className="text-center text-2xl font-medium">Login</h1>
        <form className="mt-5" onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              ref={emailRef}
              className="input-form"
              required
              onBlur={handleEmail}
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              name="password"
              required
              onBlur={handlePassword}
              className="input-form"
            />
          </label>
          <div>{error}</div>
          <Link className="flex justify-end text-blue-500" to="">
            forgot password
          </Link>
          <button className="mt-3 w-full rounded bg-purple-600 p-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
