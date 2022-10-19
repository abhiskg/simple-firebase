import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const userContext = useContext(UserContext);

  if (userContext?.loading) {
    return <div>Loading..</div>;
  }

  if (userContext?.user && userContext.user.uid) {
    return <>{children}</>;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
