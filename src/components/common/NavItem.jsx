import { NavLink } from "react-router-dom";

export default function NavItem({ to, icon, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 ${
          isActive
            ? "bg-pink-500 text-white shadow-lg"
            : "text-gray-500 hover:bg-pink-50 hover:text-pink-500"
        }`
      }
    >
      {icon}
      <span>{children}</span>
    </NavLink>
  );
}