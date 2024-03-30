import { useState } from "react";
import { addDoc } from "firebase/firestore";
import { eventCollectionRef } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeEvents } from "../redux/features/eventSlice";
import PaymentButton from "./payment";

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
    <div className="text-center">
      <div className="mb-4">
        <span
          htmlFor="formGroupExampleInput"
          className="form-label text-capitalize"
        >
          How&apos;s Hosting?
        </span>
        <input
          className="form-control"
          id="formGroupExampleInput text-capitalize"
          type="text"
          placeholder="Host"
          style={formStyle}
          value={hoster}
          onChange={(e) => setHoster(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <span
          htmlFor="formGroupExampleInput"
          className="form-label text-capitalize"
        >
          Event Title{" "}
        </span>
        <input
          className="form-control"
          id="formGroupExampleInput text-capitalize"
          type="text"
          placeholder="Title"
          style={formStyle}
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <span
          htmlFor="formGroupExampleInput"
          className="form-label text-capitalize"
        >
          Event Date
        </span>
        <input
          className="form-control"
          id="formGroupExampleInput text-capitalize"
          type="date"
          placeholder="Date"
          style={formStyle}
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <span
          htmlFor="formGroupExampleInput"
          className="form-label text-capitalize"
        >
          Event Time
        </span>
        <input
          className="form-control"
          id="formGroupExampleInput text-capitalize"
          type="time"
          placeholder="Time"
          style={formStyle}
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <span
          htmlFor="formGroupExampleInput"
          className="form-label text-capitalize"
        >
          Location
        </span>
        <input
          className="form-control"
          id="formGroupExampleInput text-capitalize"
          type="text"
          placeholder="Location"
          style={formStyle}
          value={eventLocation}
          onChange={(e) => setEventLocation(e.target.value)}
        />
      </div>
      <div className="mb-4">
        {isLoading ? (
          <input
            className="btn btn-primary text-uppercase "
            type="submit"
            value={"Loading.."}
            disabled={isLoading}
          />
        ) : (
          <PaymentButton runSaveHandleItemPurchased={handleSubmit} />
        )}
      </div>
    </div>
  );
};

export default EventFormCard;
