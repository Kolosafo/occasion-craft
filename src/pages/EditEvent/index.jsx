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
    >
      <h1>Edit Event</h1>
      <EditEventFormCard id={id} />
    </div>
  );
};

export default TicketEvent;
