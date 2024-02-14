import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fullCenterStyle } from "../pages/Login";
import { db } from "../../firebase";
// eslint-disable-next-line react/prop-types
const EditGuests = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLogged } = useSelector((store) => store.auth);
  const { events } = useSelector((store) => store.event);
  const [isLoading, setIsLoading] = useState(false);
  const [notYourEvent, setNotYourEvent] = useState(false);
  const [guest, setGuest] = useState(null);
  const formStyle = {
    padding: "10px",
  };

  const docRef = doc(db, "guests", id);
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (event) {
      await setDoc(docRef, guest)
        .then(() => {
          setIsLoading(false);
          navigate("/events");
        })
        .catch((e) => {
          console.log("ERROR", e);
          setNotYourEvent("An unknown error occured! Try Again!");
          setIsLoading(false);
        });
    }
    setIsLoading(false);
    navigate("/events");
  };

  useEffect(() => {
    const getGuest = async () => {
      setIsLoading(true);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const res = docSnap.data();
        console.log("EVENT gotten", res);
        setGuest(res);
      } else {
        setNotYourEvent("Event Not Found");
      }
      setIsLoading(false);
    };
    getGuest().catch((e) => {
      setNotYourEvent("An Unknown Error Occured!");
      console.log("FATAL ERROR gotten", e);
    });
  }, []);

  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
    }
    if (guest) {
      const findEvent = events.find((event) => event.id === guest.eventId);
      if (!findEvent) {
        setNotYourEvent(true);
      }
    }
  }, [navigate, isLogged, guest, events]);

  return notYourEvent ? (
    <h1>We couldn&apos;t find the guest. Please try refreshing the page</h1>
  ) : isLoading || !guest ? (
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
          value={guest.guestName}
          onChange={(e) => setGuest({ ...guest, guestName: e.target.value })}
        />
        <span>Guest Phone Number</span>
        <input
          type="text"
          placeholder="Guest Number"
          style={formStyle}
          value={guest.phoneNumber}
          onChange={(e) => setGuest({ ...guest, phoneNumber: e.target.value })}
        />
        <span>How Many Tickets For This Guest?</span>
        <input
          type="number"
          placeholder="Event Date"
          style={formStyle}
          value={guest.ticketCount}
          onChange={(e) => setGuest({ ...guest, ticketCount: e.target.value })}
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

export default EditGuests;
