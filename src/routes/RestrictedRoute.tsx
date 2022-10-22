import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PingLoader from "../components/loader/PingLoader";
import { UserContext } from "../context/UserContext";

interface RestrictedRouteProps {
  children: React.ReactNode;
}

const RestrictedRoute = ({ children }: RestrictedRouteProps) => {
  const userContext = useContext(UserContext);
  const location = useLocation();

  if (userContext?.loading) {
    <div className="mt-20 flex justify-center">
      <PingLoader />
    </div>;
  }

  if (!userContext?.user) {
    return <>{children}</>;
  }

  return <Navigate to="/"></Navigate>;
};

export default RestrictedRoute;
