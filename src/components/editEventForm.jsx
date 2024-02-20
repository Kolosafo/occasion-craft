import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { removeEvents } from "../redux/features/eventSlice";
import { useDispatch } from "react-redux";

// eslint-disable-next-line react/prop-types
const EditEventFormCard = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingComponent, setIsLoadingComponent] = useState(false);
  const [event, setEvent] = useState(null);
  const [errorMsg, setError] = useState("");
  const [fatalError, setFatalError] = useState(null);

  const formStyle = {
    padding: "10px",
  };

  const docRef = doc(db, "event", id);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    setError("");
    if (event) {
      await setDoc(docRef, event)
        .then(() => {
          dispatch(removeEvents());
          setIsLoading(false);
          setError("Event Updated");
          navigate("/events");
        })
        .catch((e) => {
          console.log("ERROR", e);
          setFatalError("An unknown error occured! Try Again!");
          setIsLoading(false);
        });
    }
    setIsLoading(false);
    navigate("/events");
  };

  useEffect(() => {
    const getEvent = async () => {
      console.log("GETTING EVENT", id);
      setIsLoadingComponent(true);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const res = docSnap.data();
        console.log("EVENT gotten", res);
        setEvent(res);
      } else {
        setError("Event Not Found");
      }
      setIsLoadingComponent(false);
    };
    getEvent().catch((e) => {
      setFatalError("An Unknown Error Occured!");
      console.log("FATAL ERROR gotten", e);
    });
  }, [id]);

  return (
    <>
      {fatalError ? (
        <h1>{fatalError}</h1>
      ) : isLoadingComponent || !event ? (
        <h1>Loading..</h1>
      ) : (
        <form
        className="text-center p-2"

          onSubmit={handleSubmit}
        > 
    <div class="mb-4">

<span for="formGroupExampleInput" class="form-label text-capitalize" >How&apos;s Hosting?</span>
<input
class="form-control" id="formGroupExampleInput text-capitalize" 
  type="text"
  placeholder="Host"
            style={formStyle}
            value={event.eventHoster}
            onChange={(e) =>
              setEvent({ ...event, eventHoster: e.target.value })
            }
          />
          </div>
          <div class="mb-4">
      <span for="formGroupExampleInput" class="form-label text-capitalize">Event Title </span>
      <input
      class="form-control" id="formGroupExampleInput text-capitalize" 
        type="text"
        placeholder="Title"
            style={formStyle}
            value={event.eventTitle}
            onChange={(e) => setEvent({ ...event, eventTitle: e.target.value })}
          />
          </div>
          <div class="mb-4">
      <span for="formGroupExampleInput" class="form-label text-capitalize">Event Date</span>
      <input
      class="form-control" id="formGroupExampleInput text-capitalize" 
        type="date"
        placeholder="Date"
            style={formStyle}
            value={event.eventDate}
            onChange={(e) => setEvent({ ...event, eventDate: e.target.value })}
          />
          </div>
          <div class="mb-4">

          <span for="formGroupExampleInput" class="form-label text-capitalize">Event Time</span>
      <input
      class="form-control" id="formGroupExampleInput text-capitalize" 
        type="time"
        placeholder="Time"
            style={formStyle}
            value={event.eventTime}
            onChange={(e) => setEvent({ ...event, eventTime: e.target.value })}
          />
          </div>
          <div class="mb-4">
          <span for="formGroupExampleInput" class="form-label text-capitalize">Location</span>
      <input
      class="form-control" id="formGroupExampleInput text-capitalize" 
        type="text"
        placeholder="Location"
            style={formStyle}
            value={event.eventLocation}
            onChange={(e) =>
              setEvent({ ...event, eventLocation: e.target.value })
            }
          />
          </div>
          <div class="mb-4">

          <input
                class="btn btn-primary text-uppercase "

            type="submit"
            value={isLoading ? "Loading.." : "Submit"}
            disabled={isLoading}
          />
          </div>
        </form>
      )}
    </>
  );
};

export default EditEventFormCard;
