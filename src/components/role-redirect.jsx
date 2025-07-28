import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function RoleRedirect() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && user == null) {
      return Navigate("/login");
    } else {
      switch (user.role) {
        case "student":
          navigate("/student-dashboard");
          break;
        case "teacher":
          navigate("/teacher-dashboard");
          break;
        case "admin":
          navigate("/admin-dashboard");
          break;
        default:
          navigate("/login"); // fallback if role is unknown
      }
    }
  }, [user, navigate]);

  return null;
}

export default RoleRedirect;
