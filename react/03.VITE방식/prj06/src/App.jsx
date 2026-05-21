import { NavLink, Routes, Route } from "react-router-dom";
import "./App.css";

import Ex13 from "./pages/Ex13";
import Ex14 from "./pages/Ex14";
import Ex15 from "./pages/Ex15";
import Ex15a from "./pages/Ex15a";
import Ex16 from "./pages/Ex16";
import Ex17 from "./pages/Ex17";
import Ex18 from "./pages/Ex18";
import Ex19 from "./pages/Ex19";

function App() {
  const getLinkClass = ({ isActive }) => 
    isActive ? "navLink navLinkActive" : "navLink";

  return (
    <div className="appContainer">
      {/* 프리미엄 상단 네비게이션 바 */}
      <header className="header">
        <div className="logo">
          🚀 <span>React 2026 Advanced Course</span>
        </div>
        <nav className="nav">
          <NavLink to="/" className={getLinkClass} end>Ex13</NavLink>
          <NavLink to="/ex14" className={getLinkClass}>Ex14</NavLink>
          <NavLink to="/ex15" className={getLinkClass}>Ex15</NavLink>
          <NavLink to="/ex15a" className={getLinkClass}>Ex15a</NavLink>
          <span className="navSeparator">|</span>
          <NavLink to="/ex16" className={getLinkClass}>Ex16</NavLink>
          <NavLink to="/ex17" className={getLinkClass}>Ex17</NavLink>
          <NavLink to="/ex18" className={getLinkClass}>Ex18</NavLink>
          <NavLink to="/ex19" className={getLinkClass}>Ex19</NavLink>
        </nav>
      </header>

      {/* 예제 내용 영역 */}
      <main className="main">
        <Routes>
          <Route path="/" element={<Ex13 />} />
          <Route path="/ex14" element={<Ex14 />} />
          <Route path="/ex15" element={<Ex15 />} />
          <Route path="/ex15a" element={<Ex15a />} />
          <Route path="/ex16" element={<Ex16 />} />
          <Route path="/ex17" element={<Ex17 />} />
          <Route path="/ex18" element={<Ex18 />} />
          <Route path="/ex19" element={<Ex19 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
