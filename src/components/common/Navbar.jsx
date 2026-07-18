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
    <nav className="fixed top-6 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2">

      <div className="flex items-center justify-between rounded-full border border-white/40 bg-white/80 px-8 py-4 shadow-xl backdrop-blur-xl">

        <Logo />

        <div className="hidden items-center gap-3 md:flex">

  <NavItem to="/" icon={<FiHome />}>
    Home
  </NavItem>

  <NavItem to="/chapters" icon={<FiBookOpen />}>
    Chapters
  </NavItem>

  <NavItem to="/soundtrack" icon={<FiMusic />}>
    Soundtrack
  </NavItem>

  <NavItem to="/memories" icon={<FiImage />}>
    Memories
  </NavItem>

  <NavItem to="/journey" icon={<FiHeart />}>
    Journey
  </NavItem>

  <NavItem to="/settings" icon={<FiSettings />}>
    Settings
  </NavItem>

</div>
      </div>

    </nav>
  );
}