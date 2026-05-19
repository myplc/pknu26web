import { Link, Routes, Route } from "react-router-dom";
import "./App.css";

import Ex13 from "./pages/Ex13";
import Ex14 from "./pages/Ex14";
import Ex15 from "./pages/Ex15";

function App() {
  return (
    <>
      <Link to="/">예제13</Link> |<Link to="/ex14">예제14</Link> |{" "}
      <Link to="/ex15">예제15</Link>
      <Routes>
        <Route path="/" element={<Ex13 />}></Route>
        <Route path="/ex14" element={<Ex14 />}></Route>
        <Route path="/ex15" element={<Ex15 />}></Route>
      </Routes>
    </>
  );
}

export default App;
