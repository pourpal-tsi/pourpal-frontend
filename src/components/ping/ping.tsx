import classNames from "classnames";

interface PingProps {
  className?: string;
  pingClassName?: string;
  circleClassName?: string;
}

export default function Ping({
  className,
  pingClassName,
  circleClassName,
}: PingProps) {
  const classes = classNames(
    "absolute top-1.5 right-2.5 flex h-2 w-2",
    className,
  );
  const pingClasses = classNames(
    "animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75",
    pingClassName,
  );
  const circleClasses = classNames(
    "absolute inline-flex rounded-full h-2 w-2 bg-red-400",
    circleClassName,
  );

  return (
    <span className={classes}>
      <span className={pingClasses}></span>
      <span className={circleClasses}></span>
    </span>
  );
}
