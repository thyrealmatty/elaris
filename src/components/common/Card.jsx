export default function Card({
  title,
  subtitle,
  icon,
}) {
  return (
   <div
  className="card rounded-[30px] bg-white p-8 shadow-xl border border-pink-100 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
>

      <div className="text-5xl">
        {icon}
      </div>

      <h2 className="mt-6 text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-3 text-gray-500 leading-7">
        {subtitle}
      </p>

    </div>
  );
}