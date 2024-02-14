import { Link } from "react-router-dom";
import { fullCenterStyle } from "../Login";

const CreateEvent = () => {
  return (
    <div style={fullCenterStyle}>
      <ul style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Link to={"/ticket-event"}>Ticket Event</Link>
        <Link to={"/meeting-event"}>Meeting Event</Link>
        <Link to={"/get-together-event"}>Get Together Event</Link>
        <Link to={"/other-event"}>Other Event Type</Link>
      </ul>
    </div>
  );
};

export default CreateEvent;
