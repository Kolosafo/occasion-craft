import { useNavigate } from "react-router-dom";
import EventFormCard from "../../components/eventFormCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const GetTogetherEvent = () => {
  const navigate = useNavigate();
  const { isLogged } = useSelector((store) => store.auth);
  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
    }
  }, [navigate, isLogged]);
  return (
    <div
      style={{
        border: "2px solid white",
        width: "99vw",
        height: "100vh",
        alignSelf: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <h1 className="text-capitalize">Set up a Get Together</h1>
      <EventFormCard eventType={"get together"} />
    </div>
  );
};

export default GetTogetherEvent;
