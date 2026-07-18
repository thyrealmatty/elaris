import { useLocation } from "react-router-dom";
import Navbar from "../components/common/Navbar";

export default function MainLayout({ children }) {
  const location = useLocation();

  const readingMode = location.pathname.startsWith("/chapters/");

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-[#2C2C2C]">
      {!readingMode && <Navbar />}

      <main className={readingMode ? "min-h-screen" : "pt-24"}>
        {children}
      </main>
    </div>
  );
}