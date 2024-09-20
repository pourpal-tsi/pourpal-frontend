import classNames from "classnames";

interface LoadingProps {
    className?: string;
}

export default function Loading<LoadingProps>({className = ''}) {
    const classes = classNames(
        'loading loading-spinner loading-sm',
        className
    );

    return (
        <span className={classes}></span>
    );
}