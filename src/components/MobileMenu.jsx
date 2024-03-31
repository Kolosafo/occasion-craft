/* eslint-disable react/prop-types */
import { MdOutlineCancel } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const MobileMenu = ({ setCloseNav, isOpen }) => {
  return (
    <div className={""}>
      <div className="">
        <ul className="">
          <Link
            href={"/"}
            className={``}
            onClick={() => {
              setCloseNav(false);
            }}
          >
            <FaHome size={15} color="lightgray" className="" />
            <span>Home</span>
          </Link>

          <Link
            href={"/events"}
            className={``}
            onClick={() => {
              setCloseNav(false);
            }}
          >
            <FaCartShopping
              size={15}
              color="lightgray"
              className="cursor-pointer"
            />
            <span>Events</span>
          </Link>
        </ul>
      </div>
      <div
        className="absolute sm:top-14 top-6 sm:right-16 right-8 cursor-pointer"
        onClick={() => setCloseNav(false)}
      >
        <MdOutlineCancel size={30} />
      </div>
    </div>
  );
};

export default MobileMenu;
