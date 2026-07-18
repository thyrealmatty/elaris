import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Chapters from "./pages/Chapters";
import Chapter from "./pages/Chapter";
import Soundtrack from "./pages/Soundtrack";
import Memories from "./pages/Memories";
import Journey from "./pages/Journey";
import Settings from "./pages/Settings";
import SplashScreen from "./components/SplashScreen";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplashScreen) {
    return <SplashScreen />;
  }

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chapters" element={<Chapters />} />
          <Route path="/chapters/:id" element={<Chapter />} />
          <Route path="/soundtrack" element={<Soundtrack />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}