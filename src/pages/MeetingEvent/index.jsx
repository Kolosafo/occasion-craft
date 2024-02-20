import { useNavigate } from "react-router-dom";
import EventFormCard from "../../components/eventFormCard";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const MeetingEvent = () => {
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
      <h1 className="text-capitalize">Set up a meeting</h1>
      <EventFormCard eventType={"meeting"} />
    </div>
  );
};

export default MeetingEvent;
