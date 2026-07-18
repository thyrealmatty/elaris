import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function DashboardCard({
  icon,
  title,
  subtitle,
  to,
}) {
  const content = (
    <>
      <div className="group rounded-[28px] border border-pink-100 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        <div className="flex items-center justify-between">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-50 text-2xl text-pink-500">
            {icon}
          </div>

          <FiArrowRight className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />

        </div>

        <h3 className="mt-6 text-xl md:text-2xl font-semibold">
          {title}
        </h3>

        <p className="mt-3 text-[15px] leading-7 text-gray-500">
          {subtitle}
        </p>

      </div>
      <div className="mt-8 flex items-center justify-between border-t border-pink-100 pt-5">
        <span className="text-sm text-gray-400">
          Explore
        </span>

        <FiArrowRight className="transition group-hover:translate-x-1" />
      </div>
    </>
  );

  if (to) {
    return (
      <Link to={to} className="block">
        {content}
      </Link>
    );
  }

  return content;
}