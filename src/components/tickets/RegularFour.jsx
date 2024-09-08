/* eslint-disable react/prop-types */
// import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import DownloadIcon from "../../assets/img/downloadIcon.png";
// import FullScreen from "./FullScreen";
// import { useNavigate } from "react-router-dom";

const RegularTicketDesignFour = ({ event, inviteId }) => {
  // const [showFullScreen, setShowFullScreen] = useState(false);
  // const router = useNavigate();
  return (
    <div className="min-h-[90vh] flex-1 flex flex-col my-10 justify-center items-center">
      <div className="bg-white flex flex-col justify-center items-center mb-4 rounded-xl py-3">
        <span className="md:text-4xl text-2xl font-bold my-4">{event.title}</span>
        <div
          // onClick={() => {
          //   setShowFullScreen(true);
          // }}
          className="flex  mr-2 justify-center items-center border-[2px] border-yellow-400 rounded-full"
          // style={{ height: 15, width: 39 }}
        >
          <img
            className="object-fill w-full h-full rounded-full"
            src={event.imgUri}
          />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl mb-1">You are Invited to</span>
          <span className="text-2xl mb-1 font-bold">{event.title}</span>
          <span className="text-xl mb-1">Reception</span>
          <div>
            {" "}
            <span className="text-xl mb-1 font-bold">Date:</span>
            <span className="text-xl mb-1">{event.date}</span>
          </div>
          <div>
            {" "}
            <span className="text-xl mb-1 font-bold">Venue:</span>
            <span className="text-xl mb-1 ml-2">{event.location}</span>
          </div>
          <div>
            {" "}
            <span className="text-xl mb-1 font-bold">Time:</span>
            <span className="text-xl mb-1 ml-2">{event.time}</span>
          </div>
        </div>

        {/* <img
              style={{ height: wp(35) }}
              // className="object-contain w-[60%] rounded-lg rounded-t-2xl"
              src={require("../../assets/images/dummyQr.png")}
            /> */}
        <QRCodeCanvas
          size={300}
          id={event.id}
          style={{
            display: "block",
            margin: "0 auto",
            maxWidth: "200px",
            maxHeight: "200px",
          }}
          fgColor={"black"}
          value={`https://expo.dev/Event/ViewTicket?eventId=${event.id}&inviteId=${inviteId}`}
          //  value={URL + "guest/" +guest.invitationId}
          className="mb-10 rounded-lg shadow-xl lg:mb-0 mt-4"
        />
        {/* {!eventDetail && (
       
          // <QRCode
          //   size={wp(40)}
          //   value={`https://expo.dev/Event/ViewTicket?eventId=${event.id}&inviteId=${inviteId}`}
          // />
        )} */}
      </div>
      <div className="flex flex-row basis-[10%] justify-between mt-1">
        {/* <div
          onClick={() => router.back()}
          style={{ height: 35 }}
          className="flex justify-center flex-row w-[48%] rounded-lg border-[1px] items-center py-2 px-4 bg-white"
        >
          <img
            style={{ width: 35 }}
            className="object-contain rounded-lg mr-2"
            src={require("../../assets/images/backArrow.png")}
          />
          <span className="text-base">Go Back</span>
        </div> */}
        <div className="flex flex-row w-fit rounded-lg justify-center items-center py-2 px-4 bg-[#3464DC]">
          <img
            style={{ width: 35 }}
            className="object-contain rounded-lg mr-2"
            src={DownloadIcon}
          />
          <span className="text-white text-base">Download</span>
        </div>
      </div>
      {/* <divFullScreen
        imgUrl={fullScreenImg}
        isVisible={showFullScreen}
        setVisible={setShowFullScreen}
      /> */}
      {/* {showFullScreen && <FullScreen img={event.imgUri} />} */}
    </div>
  );
};

export default RegularTicketDesignFour;
