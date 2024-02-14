import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import EditEventFormCard from "../../components/editEventForm";

const TicketEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLogged } = useSelector((store) => store.auth);
  useEffect(() => {
    if (!isLogged || !id) {
      navigate("/login");
    }
  }, [navigate, isLogged, id]);
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
      <h1>Edit Event</h1>
      <EditEventFormCard id={id} />
    </div>
  );
};

export default TicketEvent;
