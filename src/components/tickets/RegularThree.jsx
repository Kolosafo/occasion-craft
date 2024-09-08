/* eslint-disable react/prop-types */

// import { BlurView } from "expo-blur";

import { QRCodeCanvas } from "qrcode.react";
// import { EventType } from "../../types";
// import DownloadIcon from "../../assets/img/downloadIcon.png";

const RegularTicketDesignThree = ({ event, inviteId }) => {
  return (
    <div className="h-screen flex-1 flex flex-col justify-around">
      <div className="bg-white flex flex-col justify-center items-center h-full basis-[80%] mb-0 rounded-xl px-4 py-3">
        <span className="text-4xl font-bold mb-2">Join Us</span>
        <div
          // onPress={() => {
          //   setShowFullScreen(true);
          //   setFullScreenImg(event.imgUri);
          // }}
          className="flex md:w-[20%] w-[90%]"
        >
          <img
            // style={{ height: 80, width: 80 }}
            // src={require("../../assets/images/coupleImg.png")}
            src={event.imgUri}
            className="object-contain mb-4"
          />
        </div>

        <span className="text-3xl mb-3">{event.title}</span>
        {/* <Image
              style={{ height: wp(30) }}
              // className="object-contain w-[60%] rounded-lg rounded-t-2xl"
              resizeMode="contain"
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
          className="mb-3 rounded-lg shadow-xl lg:mb-0 mt-4"
        />
      </div>
      {/* <div className="flex flex-row basis-[10%] items-center justify-center ">
        <div className="flex flex-row w-fit rounded-lg justify-center items-center py-2 px-4 bg-[#3464DC]">
          <img
            style={{ width: 35 }}
            className="object-contain rounded-lg mr-2"
            src={DownloadIcon}
          />
          <span className="text-white text-base">Download</span>
        </div>
      </div> */}
      {/* {showFullScreen && (
          <divFullScreen
            imgUrl={fullScreenImg}
            isVisible={showFullScreen}
            setVisible={setShowFullScreen}
          />
        )} */}
    </div>
  );
};

export default RegularTicketDesignThree;
