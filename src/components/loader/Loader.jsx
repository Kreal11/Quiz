import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/email");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return <div>Loader</div>;
};

export default Loader;
