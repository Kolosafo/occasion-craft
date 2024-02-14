import { useState } from "react";
import { addDoc } from "firebase/firestore";
import { eventCollectionRef } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeEvents } from "../redux/features/eventSlice";

// eslint-disable-next-line react/prop-types
const EventFormCard = ({ eventType }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);
  const [hoster, setHoster] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const formStyle = {
    padding: "10px",
  };

  const handleSubmit = async (e) => {
    setIsloading(true);
    console.log("EVENT TYPE ->", eventType);
    e.preventDefault();
    const payload = {
      user: { id: user.id, name: user.name, email: user.email },
      eventHoster: hoster,
      eventTitle,
      eventDate,
      eventTime,
      eventLocation,
      eventType,
    };
    await addDoc(eventCollectionRef, payload);
    dispatch(removeEvents());
    setIsloading(false);
    navigate("/events");
  };
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "50%",
      }}
      onSubmit={handleSubmit}
    >
      <span>How&apos;s Hosting?</span>
      <input
        type="text"
        placeholder="Who's hosting?"
        style={formStyle}
        value={hoster}
        onChange={(e) => setHoster(e.target.value)}
      />
      <span>Event Title</span>
      <input
        type="text"
        placeholder="Event Title"
        style={formStyle}
        value={eventTitle}
        onChange={(e) => setEventTitle(e.target.value)}
      />
      <span>Event Date</span>
      <input
        type="date"
        placeholder="Event Date"
        style={formStyle}
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
      />
      <span>Event Time</span>
      <input
        type="time"
        placeholder="Event Time"
        style={formStyle}
        value={eventTime}
        onChange={(e) => setEventTime(e.target.value)}
      />
      <span>Location</span>
      <input
        type="text"
        placeholder="Location"
        style={formStyle}
        value={eventLocation}
        onChange={(e) => setEventLocation(e.target.value)}
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
  );
};

export default EventFormCard;
