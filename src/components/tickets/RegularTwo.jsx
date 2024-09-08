/* eslint-disable react/prop-types */

import { QRCodeCanvas } from "qrcode.react";

const RegularTicketDesignTwo = ({ event, inviteId }) => {
  return (
    <div className="flex-1 flex flex-col min-h-screen mb-10">
      <div className="flex flex-col basis-[90%] items-center px-5 py-5 h-full flex-grow-0 border-[1px] border-white rounded-3xl">
        {/* THIS VIEW IS FOR THE TICKET DETAILS*/}
        <div className="basis-[40%] flex-grow-0 h-full w-full rounded-lg px-6 py-2">
          <div
            // onPress={() => {
            //   setShowFullScreen(true);
            //   setFullScreenImg(event.imgUri);
            // }}
            className="flex items-center  justify-center"
          >
            <img
              className="object-fill md:w-[30%] w-[90%] h-full rounded-lg"
              src={event.imgUri}
            />
          </div>
        </div>
        <div className="bg-white rounded-b-2xl mb-1 basis-[30%] h-full flex flex-col justify-center items-center w-full rounded-lg px-3 py-1">
          <div className="font-bold">{event.title}</div>
          <div>{event.location}</div>
          <div className="flex mt-2 flex-col justify-between">
            <div className="">
              <div>Date</div>
              <div className="font-bold w-[70%]">{event.date}</div>
            </div>
            <div className="flex items-center gap-2">
              <div>Time</div>
              <div className="font-bold">{event.time}</div>
            </div>
          </div>
        </div>
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
          className="mb-3 rounded-lg shadow-xl lg:mb-0 mt-4 mb-10"
        />
      </div>
      {/* <div className="flex flex-row justify-between mt-1">
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ height: hp(8) }}
            className="flex justify-center flex-row w-[48%] rounded-lg border-[1px] items-center py-2 px-4 bg-white"
          >
            <Image
              style={{ width: wp(7) }}
              className="object-contain rounded-lg mr-2"
              resizeMode="contain"
              source={require("../../assets/images/backArrow.png")}
            />
            <div className="text-base">Go Back</div>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ height: hp(8) }}
            className="flex flex-row border-[1px] w-[48%] rounded-lg justify-center items-center py-1 px-4 bg-[#3464DC]"
          >
            <Image
              style={{ width: wp(7) }}
              className="object-contain rounded-lg mr-2"
              resizeMode="contain"
              source={require("../../assets/images/downloadIcon.png")}
            />
            <div className="text-white text-base">Download</div>
          </TouchableOpacity>
        </div> */}
    </div>
  );
};

export default RegularTicketDesignTwo;
