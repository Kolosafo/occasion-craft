/* eslint-disable react/prop-types */
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const HamburgerMenu = ({ setOpenMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenMenu ? setOpenMenu(!isOpen) : null;
  };

  return (
    <div
      className=""
      onClick={toggleMenu}
    >
      <GiHamburgerMenu size={35} />
    </div>
  );
};

export default HamburgerMenu;
