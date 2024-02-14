import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, isLogged } = useSelector((store) => store.auth);
  return (
    <nav>
      <ul style={{ display: "flex", gap: "40px" }}>
        <Link to={"/"} style={{ cursor: "pointer" }}>
          Home
        </Link>
        <Link to={"/events"} style={{ cursor: "pointer" }}>
          Events
        </Link>
        <Link to={"/create-event"} style={{ cursor: "pointer" }}>
          Create Event
        </Link>
        {isLogged ? (
          <img
            src={user.profilePic}
            alt="profilePic"
            style={{ width: "40px", height: "40px", borderRadius: "9999px" }}
            referrerPolicy="no-referrer"
          />
        ) : (
          <Link to={"/login"}>Sign In</Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
