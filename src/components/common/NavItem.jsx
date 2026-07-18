import { NavLink } from "react-router-dom";

export default function NavItem({ to, icon, children, mobile = false }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        mobile
          ? `flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 ${
              isActive
                ? "bg-pink-500 text-white shadow-lg"
                : "text-gray-500 hover:bg-pink-50 hover:text-pink-500"
            }`
          : `flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 ${
              isActive
                ? "bg-pink-500 text-white shadow-lg"
                : "text-gray-500 hover:bg-pink-50 hover:text-pink-500"
            }`
      }
    >
      {icon}

      {!mobile && <span>{children}</span>}
    </NavLink>
  );
}