import Logo from "./Logo";
import {
  FiHome,
  FiBookOpen,
  FiMusic,
  FiImage,
  FiHeart,
  FiSettings,
} from "react-icons/fi";

import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-6 left-1/2 z-50 hidden w-[95%] max-w-7xl -translate-x-1/2 md:block">
        <div className="flex items-center justify-between rounded-full border border-white/40 bg-white/80 px-8 py-4 shadow-xl backdrop-blur-xl">
          <Logo />

          <div className="flex items-center gap-3">
            <NavItem to="/" icon={<FiHome />}>Home</NavItem>
            <NavItem to="/chapters" icon={<FiBookOpen />}>Chapters</NavItem>
            <NavItem to="/soundtrack" icon={<FiMusic />}>Soundtrack</NavItem>
            <NavItem to="/memories" icon={<FiImage />}>Memories</NavItem>
            <NavItem to="/journey" icon={<FiHeart />}>Journey</NavItem>
            <NavItem to="/settings" icon={<FiSettings />}>Settings</NavItem>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-5 left-1/2 z-50 w-[92%] max-w-md -translate-x-1/2 rounded-full border border-white/40 bg-white/90 px-2 py-2 shadow-2xl backdrop-blur-xl md:hidden">
        <div className="flex items-center justify-around">
          <NavItem to="/" icon={<FiHome />} mobile />
          <NavItem to="/chapters" icon={<FiBookOpen />} mobile />
          <NavItem to="/soundtrack" icon={<FiMusic />} mobile />
          <NavItem to="/memories" icon={<FiImage />} mobile />
          <NavItem to="/journey" icon={<FiHeart />} mobile />
          <NavItem to="/settings" icon={<FiSettings />} mobile />
        </div>
      </nav>
    </>
  );
}