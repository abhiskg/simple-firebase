import GithubSignIn from "./components/GithubSignIn";
import GoogleSignIn from "./components/GoogleSignIn";

function App() {
  return (
    <div className="grid place-items-center h-screen">
      <GoogleSignIn />
      {/* <GithubSignIn /> */}
    </div>
  );
}

export default App;
