import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({
  isLoggedIn,
  isCheckingToken,
  onUnauthorized,
  children,
}) {
  useEffect(() => {
    if (!isCheckingToken && !isLoggedIn) {
      onUnauthorized();
    }
  }, [isCheckingToken, isLoggedIn, onUnauthorized]);

  if (isCheckingToken) {
    return null;
  }

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
