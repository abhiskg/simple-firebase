import GithubSignIn from "./components/GithubSignIn";
import GoogleSignIn from "./components/GoogleSignIn";
import RegisterByPass from "./components/RegisterByPass";

function App() {
  return (
    <div className="grid place-items-center h-screen">
      {/* <GoogleSignIn /> */}
      {/* <GithubSignIn /> */}
      <RegisterByPass />
    </div>
  );
}

export default App;
