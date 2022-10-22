import { useContext } from "react";
import { Navigate, useLocation} from "react-router-dom";
import { UserContext } from "../context/UserContext";
import PingLoader from "../components/loader/PingLoader";



const PrivateRoute = ({ children }: {children: React.ReactNode}) => {
  const userContext = useContext(UserContext);
  const location = useLocation()

  if (userContext?.loading) {
    return (
      <div className="mt-20 flex justify-center">
        <PingLoader />
      </div>
    );
  }

  if (userContext?.user && userContext.user.uid) {
    return <>{children}</>;
  }

  return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;
