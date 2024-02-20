import { useEffect, useState } from "react";
import { fullCenterStyle } from "../Login";
import { deleteDoc, doc, getDocs } from "firebase/firestore";
import { db, guestCollectionRef } from "../../../firebase";
import { useSelector } from "react-redux";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import { URL } from "../../utils";
import { IoCopyOutline } from "react-icons/io5";
import { GoPencil } from "react-icons/go";
import { TiDelete } from "react-icons/ti";


const ViewGuests = () => {
  const { eventTitle, eventId } = useParams();
  const navigate = useNavigate();
  const { user, isLogged } = useSelector((store) => store.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [eventGuests, setEventGuests] = useState(false);
  const [copyLink, setCopiedLink] = useState("Copy");

  const handleDeleteGuests = async (id) => {
    const deleteEvent = prompt("Type 'Yes' to remove guest");
    if (deleteEvent == "Yes" || "yes") {
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
    <div class="container text-center">
      <h1>Guests List</h1>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <table class="table text-center table-primary">
          <thead>
            <tr>

              <th scope="col">Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Tickets</th>
              <th scope="col">Invitation Link</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          {eventGuests && eventGuests.length > 0 ? (
            eventGuests.map((guests) => (
              <tr key={guests.id} className=" shadow-sm">
                <td>{guests.guestName}</td>
                <td>{guests.phoneNumber}</td>
                <td>{guests.ticketCount}</td>
                <td scope="col"


                >
                  {copyLink === "Copy" ? <IoCopyOutline onClick={() => {
                    handleCopyInvitationLink(guests.invitationId);
                  }} size={40} style={{ cursor: "pointer" }} /> : "COPIED!"}

                  {/* <button >
                    {`copied`}
                    {copyLink}
                  </button> */}
                </td>
                <td scope="col"
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => navigate(`/edit-guest/${guests.id}`)}
                >
                  <GoPencil size={40} />

                </td>
                <td scope="col"
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => handleDeleteGuests(guests.id)}
                >
                  <TiDelete color="red" className="btn btn-danger" size={40} />

                </td>
              </tr>
            ))
          ) : (
            <h1>You Haven&apos;t invited any guests</h1>
          )}
        </table>
      )}
      <button
        class=" btn btn-primary m-2 position-fixed bottom-0 end-0"

        onClick={() => navigate(`/add-guests/${eventId}`)}
      >
        Add Guest
      </button>
    </div>
  );
};

export default ViewGuests;
