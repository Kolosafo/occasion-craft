import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocs } from "firebase/firestore";
import { eventCollectionRef } from "../../../firebase";
import RegularTicketDesign from "../../components/tickets/RegularTicket";
import RegularTicketDesignTwo from "../../components/tickets/RegularTwo";
import RegularTicketDesignThree from "../../components/tickets/RegularThree";
import RegularTicketDesignFour from "../../components/tickets/RegularFour";

const Index = () => {
  const { eventId, userInviteId, td } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [displayEvent, setDisplayEvent] = useState();

  useEffect(() => {
    const getEvents = async () => {
      setIsLoading(true);
      const data = await getDocs(eventCollectionRef);
      const allEvents = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const filteredEvents = allEvents.find((_event) => {
        return _event?.id === eventId;
      });

      if (filteredEvents) {
        setDisplayEvent(filteredEvents);
      }
      console.log("EXITTING LOADING");
      setIsLoading(false);
    };
    getEvents();
  }, [eventId]);
  return isLoading ? (
    <div className="flex-1 justify-center items-center">
      <span>Loading...</span>
    </div>
  ) : displayEvent && td === "designOne" ? (
    <RegularTicketDesign event={displayEvent} inviteId={userInviteId} />
  ) : displayEvent && td === "designTwo" ? (
    <RegularTicketDesignTwo event={displayEvent} inviteId={userInviteId} />
  ) : displayEvent && td === "designThree" ? (
    <RegularTicketDesignThree event={displayEvent} inviteId={userInviteId} />
  ) : displayEvent && td === "designFour" ? (
    <RegularTicketDesignFour event={displayEvent} inviteId={userInviteId} />
  ) : (
    displayEvent === null && (
      <div className="flex-1 justify-center items-center">
        <span className="font-bold text-xl text-center mb-3">
          Seems like you were not invited to this event.
        </span>
        <span className="font-bold text-xl">Please contact the organizer</span>
      </div>
    )
  );
};

export default Index;
