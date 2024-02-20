import { useEffect, useState } from "react";
import { fullCenterStyle } from "../Login";
import { deleteDoc, doc, getDocs } from "firebase/firestore";
import { db, guestCollectionRef } from "../../../firebase";
import { useSelector } from "react-redux";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import { URL } from "../../utils";

const ViewGuests = () => {
  const { eventTitle, eventId } = useParams();
  const navigate = useNavigate();
  const { user, isLogged } = useSelector((store) => store.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [eventGuests, setEventGuests] = useState(false);
  const [copyLink, setCopiedLink] = useState("Copy");

  const handleDeleteGuests = async (id) => {
    const deleteEvent = prompt("Type 'Yes' to delete event");
    if (deleteEvent === "Yes") {
      setIsLoading(true);
      const eventToDelete = doc(db, "guests", id);
      await deleteDoc(eventToDelete);
      window.location.reload();
    } else {
      // notify("Incorrect Credentials");
    }
  };

  const handleCopyInvitationLink = (link) => {
    navigator.clipboard.writeText(URL + "guest/" + link);
    setCopiedLink("Copied!");
    setTimeout(() => {
      setCopiedLink("Copy");
    }, 2000);
  };

  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
    }
  }, [navigate, isLogged]);

  useEffect(() => {
    if (user && isLogged) {
      const getGuests = async () => {
        setIsLoading(true);
        const data = await getDocs(guestCollectionRef);
        const allGuests = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        const filteredGuests = allGuests.filter(
          (guest) => guest.eventId === eventId
        );
        setEventGuests(filteredGuests);
        setIsLoading(false);
      };

      getGuests();
    }
  }, [user, isLogged, eventId]);
  return (
    <div style={fullCenterStyle}>
      <h1>{eventTitle} Guests</h1>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <table>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Tickets</th>
            <th>Invitation Link</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {eventGuests && eventGuests.length > 0 ? (
            eventGuests.map((guests) => (
              <tr key={guests.id}>
                <td>{guests.guestName}</td>
                <td>{guests.phoneNumber}</td>
                <td>{guests.ticketCount}</td>
                <td
                  onClick={() => {
                    handleCopyInvitationLink(guests.invitationId);
                  }}
                  style={{ color: copyLink === "Copy" ? "white" : "green" }}
                >
                  <button
                    style={{
                      width: "90%",
                      backgroundColor: copyLink === "Copy" ? "black" : "green",
                    }}
                  >
                    {" "}
                    {copyLink}
                  </button>
                </td>
                <td
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => navigate(`/edit-guest/${guests.id}`)}
                >
                  Edit Guest
                </td>
                <td
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => handleDeleteGuests(guests.id)}
                >
                  Delete Guest
                </td>
              </tr>
            ))
          ) : (
            <h1>You Haven&apos;t invited any guests</h1>
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
        onClick={() => navigate(`/add-guests/${eventId}`)}
      >
        Add Guest
      </button>
    </div>
  );
};

export default ViewGuests;
