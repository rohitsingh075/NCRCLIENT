import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import api from "../../api";

const AdminPrivateRoute = () => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await api.get("/user/protected",{withCredentials:true});
        setIsAuth(true); // ✅ Token is valid
      } catch (err) {
        setIsAuth(false); // ❌ Invalid token or no cookie
      }
    };

    checkAuth();
  }, []);

  if (isAuth === null) return <p>Loading...</p>; // or a loader

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminPrivateRoute;

