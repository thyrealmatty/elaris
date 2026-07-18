export default function Logo() {
  return (
    <div className="flex items-center gap-3">

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D89AAF] to-[#B7A7D6] text-2xl shadow-lg">
        🌍
      </div>

      <div>

        <h1 className="text-2xl font-bold tracking-wide">
          Elaris
        </h1>

        <p className="text-xs tracking-[4px] uppercase text-gray-400">
          Legacy Lives Here
        </p>

      </div>

    </div>
  );
}