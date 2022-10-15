import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebase";

const RegisterByPass = () => {
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;

    if (!/(?=.{6,})/.test(password)) {
      setPasswordError("Character should be at least 6 character long");
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError("Please provide at least one uppercase");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      form.reset();
      console.log(user);
    } catch (error: any) {
      setPasswordError(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            className="px-1 border-2 border-black  rounded block"
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            required
            className="px-1 border-2 border-black block rounded"
          />
        </label>
        <div>{passwordError}</div>

        <button className="bg-orange-400 p-2 rounded mt-3">Submit</button>
      </form>
    </div>
  );
};

export default RegisterByPass;
