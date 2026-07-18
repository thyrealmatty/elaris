export default function QuoteCard({ quote, author }) {
  return (
    <div className="mt-10 rounded-[32px] bg-gradient-to-r from-[#D89AAF] to-[#B7A7D6] p-10 text-white shadow-xl">

      <p className="text-sm uppercase tracking-[6px] opacity-80">
        Today's Thought
      </p>

      <h2 className="mt-5 text-3xl leading-relaxed font-semibold">
        "{quote}"
      </h2>

      <p className="mt-6 text-sm opacity-90">
        — {author}
      </p>

    </div>
  );
}