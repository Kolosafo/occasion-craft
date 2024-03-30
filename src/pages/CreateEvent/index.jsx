import { Link } from "react-router-dom";
import ticket from "../../assets/img/ticket.jpg";
import meet from "../../assets/img/meeting.jpg";
import gtg from "../../assets/img/get-together.jpg";
import other from "../../assets/img/other.jpg";
import wedding from "../../assets/img/wedding.jpg";

const CreateEvent = () => {
  return (
    <div className="container p-5 text-center">
      <p className="text-center text-uppercase">
        <h1>create an event today</h1>
      </p>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <Link to={"/wedding-event"} className=" m-3">
          <div className="card text-center" style={{ width: "18rem" }}>
            <img src={wedding} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text text-capitalize">
                invite friends and family for your wedding
              </p>
            </div>
          </div>
        </Link>

        <Link to={"/ticket-event"} className=" m-3">
          <div className="card text-center" style={{ width: "18rem" }}>
            <img src={ticket} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text text-capitalize">
                Generate tickets for your event.
              </p>
            </div>
          </div>
        </Link>
        <Link to={"/meeting-event"} className=" m-3">
          <div className="card text-center" style={{ width: "18rem" }}>
            <img src={meet} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text text-capitalize">
                Set up an official meeting
              </p>
            </div>
          </div>
        </Link>
        <Link to={"/get-together-event"} className=" m-3">
          <div className="card text-center" style={{ width: "18rem" }}>
            <img src={gtg} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text text-capitalize">
                host a get together with your family and friends.
              </p>
            </div>
          </div>
        </Link>
        <Link to={"/other-event"} className=" m-3">
          <div className="card text-center" style={{ width: "18rem" }}>
            <img src={other} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text text-capitalize">
                host something else with occassion craft.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CreateEvent;
