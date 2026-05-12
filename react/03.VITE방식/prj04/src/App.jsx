import { Link, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Ex01 from "./pages/Ex01";
import Ex02 from "./pages/Ex02";

function App() {
  return (
    <>
      <Link to="/">Home</Link> | <Link to="/ex01">예제1</Link> |{" "}
      <Link to="/ex02">예제2</Link>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ex01" element={<Ex01 />}></Route>
        <Route path="/ex02" element={<Ex02 />}></Route>
      </Routes>
    </>
  );
}

export default App;
