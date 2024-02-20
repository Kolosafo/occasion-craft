import { useEffect, useState } from "react";
import { fullCenterStyle } from "../Login";
import { deleteDoc, doc, getDocs } from "firebase/firestore";
import { db, eventCollectionRef } from "../../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { loadEvents, removeEvents } from "../../redux/features/eventSlice";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLogged } = useSelector((store) => store.auth);
  const { events } = useSelector((store) => store.event);
  const [isLoading, setIsLoading] = useState(false);
  const handleDeleteEvent = async (id) => {
    const deleteEvent = prompt("Type 'Yes' to delete event");
    if (deleteEvent === "Yes") {
      setIsLoading(true);
      const eventToDelete = doc(db, "event", id);
      await deleteDoc(eventToDelete);
      dispatch(removeEvents);
      navigate("/events");
    } else {
      // notify("Incorrect Credentials");
    }
  };

  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
    }
  }, [navigate, isLogged]);
  useEffect(() => {
    if (user && isLogged && events.length === 0) {
      const getEvents = async () => {
        setIsLoading(true);
        const data = await getDocs(eventCollectionRef);
        const allEvents = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        const filteredEvents = allEvents.filter(
          (event) => event.user.email === user.email
        );
        dispatch(loadEvents(filteredEvents));
        setIsLoading(false);
      };

      getEvents();
    }
  }, [user, isLogged, dispatch, events.length]);
  return (
    <div style={fullCenterStyle}>
      <h1>All Events</h1>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <table>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Hoster</th>
            <th>Location</th>
            <th>Time</th>
            <th>Event Type</th>
            <th>Guests</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {events && events.length > 0 ? (
            events.map((event) => (
              <tr key={event.id}>
                <td>{event.eventTitle}</td>
                <td>{event.eventDate}</td>
                <td>{event.eventHoster}</td>
                <td>{event.eventLocation}</td>
                <td>{event.eventTime}</td>
                <td>{event.eventType}</td>
                <td
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={() =>
                    navigate(`/view-guests/${event.eventTitle}/${event.id}`)
                  }
                >
                  View Guests
                </td>
                <td
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => navigate(`/edit-event/${event.id}`)}
                >
                  Edit Event
                </td>
                <td
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => handleDeleteEvent(event.id)}
                >
                  Delete Event
                </td>
              </tr>
            ))
          ) : (
            <h1>You Haven&apos;t Created any events</h1>
          )}
        </table>
      )}
      <button
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          backgroundColor: "lightgray",
          color: "black",
        }}
        onClick={() => navigate(`/create-event`)}
      >
        New Event
      </button>
    </div>
  );
};

export default Events;
