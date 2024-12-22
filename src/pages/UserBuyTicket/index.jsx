import { useEffect, useState } from "react";
import MaxWidthContainer from "../../components/max-width-container";
import CheckoutSuccess from "../../components/checkoutSuceess";
import PageLoading from "../../components/pageLoading";
import { useParams } from "react-router-dom";
import { addDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import {
  db,
  guestCollectionRef,
  userInfoCollectionRef,
} from "../../../firebase";
import Paystack from "../../components/Paystack";

const TicketPurchase = () => {
  const { id, eventTitle, userId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [eventObj, setEventObj] = useState();
  // const [paymentLoading, setPaymentLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async () => {
    setIsLoading(true);
    const data = await getDocs(userInfoCollectionRef);
    const allEvents = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    const filteredUserInfo = allEvents.find((_user) => {
      return _user?.userId === userId;
    });
    if (filteredUserInfo) {
      // {
      //   firstName: "Dauda";
      //   gender: "Male";
      //   id: "BrzqElDJnM1UqoyJQjgx";
      //   lastName: "Kolo";
      //   phoneNumber: "09075976217";
      //   userId: "I8Y1JdYM9NTHsuDc3aiPIQi8h092";
      // }
      await addDoc(guestCollectionRef, {
        fullName: `${filteredUserInfo.firstName} ${filteredUserInfo.lastName}`,
        phoneNumber: filteredUserInfo.phoneNumber,
        eventId: id,
        ticketCount: 1,
        ticketType: "normal",
        ticketDesign: eventObj?.ticketDesign,
        invitationId: uuidv4(),
      });
      const docRef = doc(db, "event", id);
      await setDoc(docRef, {
        ...eventObj,
        numOfGuests: eventObj.numOfGuests + 1,
      })
        .then(() => {
          setIsLoading(false);
          setSuccess(true);
        })
        .catch((e) => {
          console.log("ERROR", e);
          setErrorMsg("An unknown error occured! Try Again!");
          setIsLoading(false);
        });
      setIsLoading(false);
      setSuccess(true);
    } else {
      setErrorMsg("User not found");
      setNotFound(true);
      return null;
    }
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const docRef = doc(db, "event", id);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        setNotFound(true);
        return;
      }
      setEventObj(docSnap.data());
      setIsLoading(false);
    })();
  }, [id]);

  return notFound ? (
    <div className="flex w-screen h-screen justify-center flex-col items-center self-center">
      <span className="text-2xl font-bold text-red-700">
        User or event not found
      </span>
    </div>
  ) : isLoading ? (
    <PageLoading />
  ) : success ? (
    <CheckoutSuccess
      text={
        "Payment Successful! Please return to the app and refresh the events page"
      }
    />
  ) : (
    <MaxWidthContainer className="flex flex-col justify-center items-center p-24">
      <section className="flex flex-col justify-center items-center gap-2 lg:gap-4">
        <span className="self-center font-bold text-center md:text-2xl text-lg mb-6 max-w-prose">
          {`${eventTitle} Event Ticket Purchase`}
        </span>

        {eventObj.ticketPrice && (
          <Paystack
            handleSuccess={handleSubmit}
            amount={eventObj.ticketPrice}
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
