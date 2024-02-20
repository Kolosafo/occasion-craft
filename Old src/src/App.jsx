// import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const renderRoute = (route, index) => {
  return <Route key={index} path={route.to} element={<route.element />} />;
};

import { appRoutes } from "./route/app";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      {/* <InstacartHeader /> */}
      <Navbar />
      <Routes>
        {appRoutes.map((route, index) => renderRoute(route, index))}
      </Routes>
    </Router>
  );
}
export default App;
