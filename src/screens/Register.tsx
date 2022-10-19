import { sendEmailVerification } from "firebase/auth";
import { useState, useRef, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import useFirebase from "../hook/useFirebase";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const nameRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const userContext = useContext(UserContext);

  const handleName = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setError("Please type your name");
      return;
    }
    setName(e.target.value);
    setError("");
  };

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
    if (!/(?=.{8,})/.test(e.target.value)) {
      setError("Password should be at least 8 character long");
      return;
    }

    if (!/(?=.*[A-Z])/.test(e.target.value)) {
      setError("Please provide at least one uppercase");
      return;
    }
    setPassword(e.target.value);
    setError("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name && !email && !password) {
      setError("Fill all the fields");
      return;
    }
    console.log(name, email, password);

    userContext
      ?.signUp(email, password)
      .then(({ user }) => {
        if (user) {
          userContext
            .updateUser(name, user)
            .then(() => console.log("Update successfully"))
            .catch((error) => console.log(error));
          sendEmailVerification(user);
        }
      })
      .catch((error: any) => {
        setError(error.message);
      });

    setName("");
    setEmail("");
    setPassword("");
  };

  const handleGoogleLogin = () => {
    userContext
      ?.signInWithGoogle()
      .then(() => {})
      .catch((error: any) => {
        setError(error.message);
      });
  };

  return (
    <div className="custom-width mx-auto mt-10 flex justify-center ">
      <div>
        <h1 className="text-center text-2xl font-medium">Register</h1>
        <form className="mt-5" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              ref={nameRef}
              type="text"
              name="text"
              required
              onBlur={handleName}
              className="input-form"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
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
          <label>
            <input
              onClick={() => setIsDisabled(!isDisabled)}
              type="checkbox"
              name=""
              id=""
            />
            <span>accept all terms & conditions</span>
          </label>
          <button
            disabled={isDisabled}
            className="mt-3 w-full rounded bg-purple-600 p-2"
          >
            Register
          </button>
        </form>
        <button onClick={handleGoogleLogin}>Google Login</button>
      </div>
    </div>
  );
};

export default Register;
