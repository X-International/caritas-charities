type LogLevel = "info" | "warn" | "error";

type LogContext = Record<string, string | number | boolean | null | undefined>;

function write(level: LogLevel, event: string, context: LogContext = {}) {
  const entry = {
    timestamp: new Date().toISOString(),
    level,
    event,
    ...context,
  };

  const output = JSON.stringify(entry);
  if (level === "error") console.error(output);
  else if (level === "warn") console.warn(output);
  else console.info(output);
}

export const logger = {
  info: (event: string, context?: LogContext) => write("info", event, context),
  warn: (event: string, context?: LogContext) => write("warn", event, context),
  error: (event: string, context?: LogContext) => write("error", event, context),
};

export function requestIdFrom(request: Request) {
  const supplied = request.headers.get("x-request-id")?.trim();
  return supplied && /^[a-zA-Z0-9._:-]{1,128}$/.test(supplied)
    ? supplied
    : crypto.randomUUID();
}
