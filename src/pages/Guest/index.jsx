import { useEffect, useState } from "react";
import { doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { QRCodeCanvas } from "qrcode.react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { db, guestCollectionRef } from "../../../firebase";

// eslint-disable-next-line react/prop-types
const Guest = () => {
  const { invitationId } = useParams();

  const { isLogged, user } = useSelector((store) => store.auth);
  const [isLoadingComponent, setIsLoadingComponent] = useState(false);
  const [guest, setGuest] = useState(null);
  const [event, setEvent] = useState(null);
  const [verifier, setVerifier] = useState(false);
  const [verifyBtn, setVerifyBtn] = useState("Mark Attendance");
  const [isLoading, setIsLoading] = useState(false);
  const [fatalError, setFatalError] = useState(null);

  const handleUpdateInvitation = async () => {
    const guestDocRef = doc(db, "guests", guest.id);
    setIsLoading(true);
    setFatalError("");
    if (guest && verifyBtn !== "Ticket Used") {
      console.log("lOADING");
      const ticketCount = parseInt(guest.ticketCount);
      await setDoc(guestDocRef, {
        ...guest,
        ticketCount: ticketCount - 1,
      })
        .then(() => {
          setIsLoading(false);
          setVerifyBtn("Ticket Used");
        })
        .catch((e) => {
          console.log("ERROR", e);
          setFatalError("An unknown error occured! Try Again!");
          setIsLoading(false);
        });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const getEvent = async () => {
      setIsLoadingComponent(true);
      const data = await getDocs(guestCollectionRef);
      const allGuests = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const findGuest = allGuests.find(
        (guest) => guest.invitationId === invitationId
      );

      if (findGuest) {
        const eventDocRef = doc(db, "event", findGuest.eventId);
        const eventDocSnap = await getDoc(eventDocRef);
        if (eventDocSnap.exists()) {
          const eventRes = eventDocSnap.data();
          setGuest(findGuest);
          setEvent(eventRes);
        } else {
          setFatalError("You Were Not Invited To This Event");
        }
      } else {
        console.log("GUEST NO DEY");
        setFatalError("You Were Not Invited To This Event");
      }
      setIsLoadingComponent(false);
    };
    getEvent().catch((e) => {
      setFatalError("An Unknown Error Occured!");
      console.log("FATAL ERROR gotten", e);
    });
  }, [invitationId]);

  useEffect(() => {
    if (isLogged && event && guest && event.user.email === user.email) {
      setVerifier(true);
    }
  }, [event, isLogged, guest, user.email]);

  return (
    <>
      {fatalError ? (
        <h1>{fatalError}</h1>
      ) : isLoadingComponent || !event || !guest ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {verifier ? (
            <>
              <h6 style={{ fontSize: "20px", color: "red" }}>
                Tickets Left For This Guest: {guest.ticketCount}
              </h6>
              <h2>Event: {event.eventTitle}</h2>
              <h5>Guest: {guest.guestName}</h5>
              <h4 style={{ marginBottom: "20px" }}>
                Event Date: {event.eventDate}
              </h4>
              {guest.ticketCount <= 0 ? (
                <span style={{ fontSize: "20px", color: "red" }}>
                  THIS GUEST HAS USED HIS/HER TICKETS
                </span>
              ) : (
                <button
                  onClick={handleUpdateInvitation}
                  disabled={isLoading || verifyBtn === "Ticket Used"}
                  style={{
                    backgroundColor:
                      verifyBtn === "Ticket Used" ? "red" : "green",
                    color: verifyBtn === "Ticket Used" && "white",
                  }}
                >
                  {verifyBtn}
                </button>
              )}
            </>
          ) : (
            <>
              <h5>Guest: {guest.guestName}</h5>
              <QRCodeCanvas
                size={300}
                id="123456"
                style={{
                  height: "auto",
                  // maxWidth: "50%",
                  // width: "50%",
                  padding: "20px",
                  backgroundColor: "white",
                }}
                fgColor={"black"}
                value={guest.invitationId}
                className="mb-10 rounded-lg shadow-xl lg:mb-0"
              />
              <h6 style={{ color: "red" }}>
                Tickets Left: {guest.ticketCount}
              </h6>
              <h2>Event: {event.eventTitle}</h2>
              <h4 style={{ marginBottom: "20px" }}>
                Event Date: {event.eventDate}
              </h4>
              <h5>Invited By: {event.eventHoster}</h5>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Guest;
