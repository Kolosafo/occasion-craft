import { useEffect } from "react";
import EventFormCard from "../../components/eventFormCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TicketEvent = () => {
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
<h1 className="text-capitalize">Set up a Ticket Event</h1>
      <EventFormCard eventType="ticket" />
    </div>
  );
};

export default TicketEvent;
