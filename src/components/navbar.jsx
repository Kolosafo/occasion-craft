/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = ({ setOpenMobileNav }) => {
  const { user, isLogged } = useSelector((store) => store.auth);
  return (
    <nav className="navbar navbar-expand-lg p-2 bg-body-tertiary shadow-sm">
      <ul style={{ display: "flex", gap: "40px" }}>
        {isLogged ? (
          <img
            className="nav-link"
            src={user.profilePic}
            alt="profilePic"
            style={{ width: "40px", height: "40px", borderRadius: "9999px" }}
            referrerPolicy="no-referrer"
          />
        ) : (
          <Link class="nav-link" to={"/login"}>
            Sign In
          </Link>
        )}

        <Link class="nav-link" to={"/"} style={{ cursor: "pointer" }}>
          Home
        </Link>
        <Link class="nav-link" to={"/events"} style={{ cursor: "pointer" }}>
          Events
        </Link>
        <Link
          class="nav-link"
          to={"/create-event"}
          style={{ cursor: "pointer" }}
        >
          Create Event
        </Link>
      </ul>
      <HamburgerMenu setOpenMenu={setOpenMobileNav} />
    </nav>
  );
};

export default Navbar;
