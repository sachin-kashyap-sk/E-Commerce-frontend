import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const navigate = useNavigate();

  const userToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!userToken || userToken === "undefined") {
      navigate("/Login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <React.Fragment>{!!userToken ? props.children : null}</React.Fragment>;
};
export default ProtectedRoute;
