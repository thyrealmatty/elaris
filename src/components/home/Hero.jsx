import getGreeting from "../../utils/getGreeting";
import user from "../../data/user";

export default function Hero() {
  const { greeting, emoji } = getGreeting();

  return (
    <section className="rounded-[28px] border border-[#efe3d3] bg-[#fffaf3] p-6 shadow-lg md:rounded-[40px] md:p-10">

      <p className="text-xs font-semibold uppercase tracking-[6px] text-pink-400 md:text-sm md:tracking-[8px]">
        Welcome Home
      </p>

      <h1 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.03em] text-[#2C2C2C] md:mt-5 md:text-6xl">
        {greeting},
        <br />
        {user.reader.name} {emoji}
      </h1>

      <p className="mt-4 max-w-xl text-[15px] leading-7 text-gray-500 md:mt-6 md:text-lg md:leading-8">
        Somewhere in this world, someone is always thinking of you.
      </p>

    </section>
  );
}