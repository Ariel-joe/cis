import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import PillarPage from "./pages/PillarPage/PillarPage";
import BubblePage from "./pages/BubblePage/BubblePage";

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pillar/:pillarSlug" element={<PillarPage />} />
          <Route path="/pillar/:pillarSlug/:bubbleSlug" element={<BubblePage />} />
        </Routes>
      </main>
    </>
  );
}
