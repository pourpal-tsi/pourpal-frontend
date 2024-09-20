import classNames from "classnames";

interface LoadingProps {
  className?: string;
}

export default function Loading({ className = "" }: LoadingProps) {
  const classes = classNames("loading loading-spinner loading-sm", className);
  return <span className={classes}></span>;
}
