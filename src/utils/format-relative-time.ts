export default function formatRelativeTime(createdAt: string) {
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  const now = Date.now();
  const orderTime = new Date(createdAt).getTime();
  const diffInSeconds = Math.floor((now - orderTime) / 1000);

  const minute = 60;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const year = 365 * day;

  if (diffInSeconds < minute) {
    return rtf.format(-diffInSeconds, "second");
  } else if (diffInSeconds < hour) {
    return rtf.format(-Math.floor(diffInSeconds / minute), "minute");
  } else if (diffInSeconds < day) {
    return rtf.format(-Math.floor(diffInSeconds / hour), "hour");
  } else if (diffInSeconds < month) {
    return rtf.format(-Math.floor(diffInSeconds / day), "day");
  } else if (diffInSeconds < year) {
    return rtf.format(-Math.floor(diffInSeconds / month), "month");
  } else {
    return rtf.format(-Math.floor(diffInSeconds / year), "year");
  }
}
