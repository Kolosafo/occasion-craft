import { useEffect, useState } from "react";
import MaxWidthContainer from "../../components/max-width-container";
import CheckoutSuccess from "../../components/checkoutSuceess";
import PageLoading from "../../components/pageLoading";
import { useParams } from "react-router-dom";
import { doc, getDocs, setDoc } from "firebase/firestore";
import {
  db,
  eventCollectionRef,
  eventTicketCollectionRef,
} from "../../../firebase";
import Paystack from "../../components/Paystack";

const TicketPurchase = () => {
  const { id, eventTitle, userEmail } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [displayEvent, setDisplayEvent] = useState();
  // const [paymentLoading, setPaymentLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [eventTicket, setEventTickets] = useState();

  const handleSuccess = async (ref) => {
    const docRef = doc(db, "event", id);
    if (displayEvent) {
      await setDoc(docRef, { ...displayEvent, hasPaid: true, paymentRef: ref })
        .then(() => {
          setIsLoading(false);
          setSuccess(true);
        })
        .catch((e) => {
          console.log("ERROR", e);
          setErrorMsg("An unknown error occured! Try Again!");
          setIsLoading(false);
        });
    }
    if (!ref) {
      setErrorMsg("Something went wrong! Please try again");
    }
  };

  // const handleError = (msg) => {
  //   setErrorMsg(msg);
  // };

  useEffect(() => {
    const getEvents = async () => {
      setIsLoading(true);
      const data = await getDocs(eventCollectionRef);
      const allEvents = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const filteredEvents = allEvents.find((_event) => {
        return _event?.id === id;
      });

      if (filteredEvents) {
        setDisplayEvent(filteredEvents);
      } else {
        setNotFound(true);
      }
      console.log("EXITTING LOADING");
      setIsLoading(false);
    };
    if (eventTicket) {
      getEvents();
    }
  }, [id, eventTicket]);

  useEffect(() => {
    const getAllTickets = async () => {
      const eventTickets = await getDocs(eventTicketCollectionRef);
      const allEventTickets = eventTickets.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      console.log("ALL EVENT TICKETS", allEventTickets);
      const filteredEventTicket = allEventTickets.find((_eventTicket) => {
        return (
          _eventTicket?.user?.email === userEmail && _eventTicket.eventId === id
        );
      });
      console.log("FILTERED EVENTS TICKETS", filteredEventTicket);
      setEventTickets(filteredEventTicket);
    };
    getAllTickets();
  }, [userEmail, id]);

  return notFound ? (
    <div className="flex w-screen h-screen justify-center flex-col items-center self-center">
      <span className="text-2xl font-bold text-red-700">Invalid Link</span>
    </div>
  ) : isLoading ? (
    <PageLoading />
  ) : success ? (
    <CheckoutSuccess />
  ) : (
    <MaxWidthContainer className="flex flex-col justify-center items-center p-24">
      <section className="flex flex-col justify-center items-center gap-2 lg:gap-4">
        <span className="self-center font-bold text-2xl mb-6 max-w-prose">
          {`${eventTitle} Event Creation Payment`}
        </span>
        {eventTicket.totalPrice && (
          <Paystack
            handleSuccess={handleSuccess}
            amount={eventTicket.totalPrice}
          />
        )}

        {errorMsg && (
          <span className="mt-4 font-bold text-red-500 mb-1">{errorMsg}</span>
        )}
      </section>
    </MaxWidthContainer>
  );
};

export default TicketPurchase;
