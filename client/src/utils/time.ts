import {
  formatDuration,
  intervalToDuration,
  setDefaultOptions,
} from "date-fns";
import { vi } from "date-fns/locale";
setDefaultOptions({ locale: vi });
export function getDurationFromNow(time: Date) {
  const duration = intervalToDuration({
    start: new Date(Date.now()),
    end: new Date(time),
  });
  if (duration.weeks)
    return formatDuration(duration, {
      format: ["weeks", "days"],
    });
  if (duration.days)
    return formatDuration(duration, {
      format: ["days", "hours"],
    });
  if (duration.hours)
    return formatDuration(duration, {
      format: ["hours", "minutes"],
    });
  if (duration.minutes)
    return formatDuration(duration, {
      format: ["minutes", "seconds"],
    });
  return formatDuration(duration, {
    format: ["days", "hours", "minutes"],
  });
}

export function formatDate(dateString: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString.toString()).toLocaleDateString("vi-VN", options);
}
