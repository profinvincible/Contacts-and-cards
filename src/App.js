import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navlinks from "./components/NavBar";
import Home from "./pages/Home";
import Lorem from "./pages/Lorem";
import AboutUs from "./pages/AboutUs";
import Sign from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navlinks />

      <Routes>
        <Route path="Sign" element={<Sign />} />
        <Route path="/" element={<Home></Home>} />
        <Route path="Lorem" element={<Lorem />} />
        <Route path="AboutUs" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

/* <Route index element={<Home funcNav={setShowNav} />} />; */

// props.funcNav(false);

export default App;
