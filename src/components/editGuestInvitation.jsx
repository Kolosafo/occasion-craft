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
                     className=" form text-center p-2"

        onSubmit={handleSubmit}
      >
          <div class="mb-4">
      <span for="formGroupExampleInput" class="form-label text-capitalize">guest name </span>
      <input
      class="form-control" id="formGroupExampleInput text-capitalize" 
        type="text"
          placeholder="Guest Name"
          style={formStyle}
          value={guest.guestName}
          onChange={(e) => setGuest({ ...guest, guestName: e.target.value })}
        />
        </div>
       <div class="mb-4">
      <span for="formGroupExampleInput" class="form-label text-capitalize">Guest phone number </span>
      <input
      class="form-control" id="formGroupExampleInput text-capitalize" 
        type="phone"
          placeholder="Guest phone"
          style={formStyle}
          value={guest.phoneNumber}
          onChange={(e) => setGuest({ ...guest, phoneNumber: e.target.value })}
        />
        </div>
            <div class="mb-4">
      <span for="formGroupExampleInput" class="form-label text-capitalize">number of ticket</span>
      <input
      class="form-control" id="formGroupExampleInput text-capitalize" 
          type="number"
          placeholder="tickets"
          style={formStyle}
          value={guest.ticketCount}
          onChange={(e) => setGuest({ ...guest, ticketCount: e.target.value })}
        />
</div>
        <input
          type="submit"
          value={isLoading ? "Loading.." : "Submit"}
          disabled={isLoading}
          class="btn btn-primary text-uppercase "

        />
      </form>
    </div>
  );
};

export default EditGuests;
