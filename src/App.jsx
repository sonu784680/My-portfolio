import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Nav></Nav>
        <Home></Home>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
