export default function SpecialMomentCard({
  moment,
}) {
  if (!moment) return null;

  return (
    <div className="mt-10 rounded-[32px] border border-pink-200 bg-gradient-to-br from-pink-50 to-white p-6 shadow-lg">

      <p className="text-xs font-semibold uppercase tracking-[6px] text-pink-400">
        This Day in Our Story
      </p>

      <div className="mt-5 flex items-center gap-4">

        <div className="text-5xl">
          {moment.icon}
        </div>

        <div>

          <h2 className="text-2xl font-bold">
            {moment.title}
          </h2>

          <p className="mt-2 text-gray-600 leading-7">
            {moment.message}
          </p>

        </div>

      </div>

    </div>
  );
}