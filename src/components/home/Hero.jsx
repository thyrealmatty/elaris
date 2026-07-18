import getGreeting from "../../utils/getGreeting";
import user from "../../data/user";

export default function Hero() {
  const { greeting, emoji } = getGreeting();

  return (
    <section className="rounded-[40px] border border-[#efe3d3] bg-[#fffaf3] p-12 shadow-lg">

      <p className="text-sm font-semibold uppercase tracking-[8px] text-pink-400">
        Welcome Home
      </p>

      <h1 className="mt-5 text-6xl font-bold leading-[1.05] tracking-[-0.04em] text-[#2C2C2C]">
        {greeting},
        <br />
        {user.reader.name} {emoji}
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-500">
        Somewhere in this world,
        someone is always thinking of you.
      </p>

    </section>
  );
}