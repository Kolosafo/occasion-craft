import { useEffect, useState } from "react";
import { deleteDoc, doc, getDocs } from "firebase/firestore";
import { db, eventCollectionRef } from "../../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { loadEvents, removeEvents } from "../../redux/features/eventSlice";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";
import { TiDelete } from "react-icons/ti";

const Events = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLogged } = useSelector((store) => store.auth);
  const { events } = useSelector((store) => store.event);
  const [isLoading, setIsLoading] = useState(false);
  const handleDeleteEvent = async (id) => {
    const deleteEvent = prompt("Type 'Yes' to delete event");
    if (deleteEvent == "Yes") {
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
    <div className="container text-center">
      <p>
        <h1>My Events</h1>
      </p>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : !events || events.length <= 0 ? (
        <h1>You Haven&apos;t Created any events</h1>
      ) : (
        <table className="table text-center table-primary">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Date</th>
              <th scope="col">Host</th>
              <th scope="col">Location</th>
              <th scope="col">Time</th>
              <th scope="col">Type</th>
              <th scope="col">Guests</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          {events.length > 0 &&
            events.map((event) => (
              <tr key={event.id} className=" shadow-sm">
                <td scope="col">{event.eventTitle}</td>
                <td scope="col">{event.eventDate}</td>
                <td scope="col">{event.eventHoster}</td>
                <td scope="col">{event.eventLocation}</td>
                <td scope="col">{event.eventTime}</td>
                <td scope="col">{event.eventType}</td>
                <td
                  scope="col"
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={() =>
                    navigate(`/view-guests/${event.eventTitle}/${event.id}`)
                  }
                >
                  <FaRegEye
                    color="#007BFF"
                    size={40}
                    className="btn btn-primary"
                  />
                </td>
                <td
                  scope="col"
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => navigate(`/edit-event/${event.id}`)}
                >
                  <GoPencil size={40} />
                </td>
                <td
                  scope="col"
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => handleDeleteEvent(event.id)}
                >
                  <TiDelete color="red" className="btn btn-danger" size={40} />
                </td>
              </tr>
            ))}
        </table>
      )}
      <button
        className=" btn btn-primary m-2 position-fixed bottom-0 end-0"
        onClick={() => navigate(`/create-event`)}
      >
        New Event
      </button>
    </div>
  );
};

export default Events;
