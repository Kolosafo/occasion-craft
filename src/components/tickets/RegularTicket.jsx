/* eslint-disable react/prop-types */
import { QRCodeCanvas } from "qrcode.react";

const RegularTicketDesign = ({ event, inviteId }) => {
  return (
    <div className="min-h-screen mt-10 items-center flex-1 flex flex-col gap-4">
      {/* <ImageBackground
          source={{ uri: event.imgUri }}
          resizeMode="cover"
          className="flex-1 h-full justify-center  flex rounded-lg p-3"
        > */}
      <span className="self-center text-black text-xl font-bold">Ticket</span>
      <div className="rounded-2xl  overflow-hidden">
        <span className="text-lg rounded-3xl">Event: {event.title}</span>
      </div>

      <div className="rounded-2xl overflow-hidden items-center flex flex-col">
        <span className="text-lg rounded-3xl">Date: {event.date}</span>
        <span className="text-lg rounded-3xl my-2">Time: {event.time}</span>
        <span className="text-lg rounded-3xl">Venue: {event.location}</span>
      </div>

      {/* THIS VIEW IS FOR THE TICKET DETAILS*/}
      <div className=" bg-white rounded-t-2xl justify-center p-3 items-center rounded-lg">
        {/* <Image
              className="object-contain w-[60%] rounded-lg rounded-t-2xl"
              resizeMode="contain"
              source={require("../../assets/images/dummyQr.png")}
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

      {/* <div className="flex flex-row justify-between mt-3">
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
              <span className="text-base">Go Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ height: hp(8) }}
              className="flex flex-row border-[1px] w-[48%] rounded-lg justify-center items-center py-1 px-4 bg-[#3464DC]"
            >
              <img
                style={{ width: wp(7) }}
                className="object-contain rounded-lg mr-2"
                src={require("../../assets/images/downloadIcon.png")}
              />

              <span className="text-white text-base">Download</span>
            </TouchableOpacity>
          </div> */}
    </div>
  );
};

export default RegularTicketDesign;
