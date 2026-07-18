import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function DashboardCard({
  icon,
  title,
  subtitle,
  to,
}) {
  const content = (
    <div className="group rounded-[32px] border border-pink-100 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="flex items-center justify-between">

        <div className="text-3xl">
          {icon}
        </div>

        <FiArrowRight className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />

      </div>

      <h3 className="mt-6 text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-500">
        {subtitle}
      </p>

    </div>
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