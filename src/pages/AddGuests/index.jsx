import { useEffect, useState } from "react";
import { addDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { guestCollectionRef } from "../../../firebase";
import { fullCenterStyle } from "../Login";
import { v4 as uuidv4 } from "uuid";
// eslint-disable-next-line react/prop-types
const AddGuests = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const uniqueId = uuidv4();
  const { isLogged } = useSelector((store) => store.auth);
  const { events } = useSelector((store) => store.event);
  const [guestName, setGuestName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [notYourEvent, setNotYourEevent] = useState(false);
  const [ticketCount, setTicketCount] = useState(1);

  const formStyle = {
    padding: "10px",
  };

  const handleSubmit = async (e) => {
    setIsloading(true);
    e.preventDefault();
    await addDoc(guestCollectionRef, {
      guestName,
      phoneNumber,
      eventId,
      ticketCount,
      invitationId: uniqueId,
    });
    setIsloading(false);
    navigate("/events");
  };

  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
    }
    const findEvent = events.find((event) => event.id === eventId);
    if (!findEvent) {
      setNotYourEevent(true);
    }
  }, [navigate, isLogged, eventId, events]);
  return notYourEvent ? (
    <h1>We couldn&apos;t find this event. Please try refreshing the page</h1>
  ) : isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div style={fullCenterStyle}>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "50%",
        }}
        onSubmit={handleSubmit}
      >
        <span>Guest Name</span>
        <input
          type="text"
          placeholder="Guest Name"
          style={formStyle}
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
        />
        <span>Guest Phone Number</span>
        <input
          type="text"
          placeholder="Guest Number"
          style={formStyle}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <span>How Many Tickets For This Guest?</span>
        <input
          type="number"
          placeholder="Event Date"
          style={formStyle}
          value={ticketCount}
          onChange={(e) => setTicketCount(e.target.value)}
        />

        <input
          type="submit"
          value={isLoading ? "Loading.." : "Submit"}
          disabled={isLoading}
          style={{
            cursor: "pointer",
            padding: "10px",
            backgroundColor: isLoading ? "gray" : "cyan",
            color: "black",
            fontSize: "18px",
            fontWeight: "700",
          }}
        />
      </form>
    </div>
  );
};

export default AddGuests;
