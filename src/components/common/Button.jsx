export default function Button({
  children,
  onClick,
  variant = "primary",
}) {
  const styles = {
    primary:
      "bg-pink-500 text-white hover:scale-105 hover:bg-pink-600",

    secondary:
      "bg-white text-pink-500 border border-pink-200 hover:bg-pink-50",
  };

  return (
    <button
      onClick={onClick}
      className={`
        rounded-full
        px-8
        py-4
        font-semibold
        transition-all
        duration-300
        shadow-lg
        ${styles[variant]}
      `}
    >
      {children}
    </button>
  );
}