import clsx from "clsx";
import { ReactNode } from "react";

const TextShine = ({
  children,
  className,
}: {
  children: string | ReactNode;
  className?: string | undefined;
}) => {
  return (
    <span
      className={clsx(
        "inline-flex z-20",
        "animate-background-shine bg-[linear-gradient(110deg,#fff,45%,#9d9d9d,55%,#fff)]",
        "bg-[length:250%_100%] bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </span>
  );
};

export default TextShine;
