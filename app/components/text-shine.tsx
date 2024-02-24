import clsx from "clsx";

const TextShine = ({ text }: { text: string }) => {
  return (
    <span
      className={clsx(
        "inline-flex font-bold text-3xl md:text-4xl font-mono",
        "animate-background-shine bg-[linear-gradient(110deg,#fff,45%,#9d9d9d,55%,#fff)]",
        "bg-[length:250%_100%] bg-clip-text text-transparent",
      )}
    >
      {text}
    </span>
  );
};

export default TextShine;
