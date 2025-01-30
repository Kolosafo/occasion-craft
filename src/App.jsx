// import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
const renderRoute = (route, index) => {
  return <Route key={index} path={route.to} element={<route.element />} />;
};

import { appRoutes } from "./route/app";
import Navbar from "./components/navbar";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu";

function App() {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  return (
    <Router>
      {/* <InstacartHeader /> */}
      <MobileMenu isOpen={openMobileNav} setCloseNav={setOpenMobileNav} />
      <Navbar setOpenMobileNav={setOpenMobileNav} />
      <Routes>
        {appRoutes.map((route, index) => renderRoute(route, index))}
      </Routes>
   
    </Router>
  );
}
export default App;
