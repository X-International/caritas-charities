import { EmergencyAppeal, AppealStatus } from "./content/appeals";

/**
 * DEVELOPMENT-ONLY DATE SIMULATION OVERRIDE
 *
 * To simulate a specific date/time during local development, set this variable to an ISO 8601 string:
 * e.g. "2026-09-30T23:59:59+03:00" for ACTIVE state test
 * e.g. "2026-10-01T00:01:00+03:00" for CONCLUDED state test
 *
 * MUST BE SET TO `null` FOR PRODUCTION AND COMMITS!
 * Production builds automatically ignore this override regardless of value.
 */
export const DEV_APPEAL_NOW_OVERRIDE: string | null = null;

/**
 * Returns the current date/time to use for appeal status calculations.
 * Ignores DEV_APPEAL_NOW_OVERRIDE in production environment.
 */
export function getAppealsNow(): Date {
  if (
    process.env.NODE_ENV === "development" &&
    typeof DEV_APPEAL_NOW_OVERRIDE === "string" &&
    DEV_APPEAL_NOW_OVERRIDE.trim().length > 0
  ) {
    const parsed = new Date(DEV_APPEAL_NOW_OVERRIDE);
    if (!isNaN(parsed.getTime())) {
      return parsed;
    }
  }
  return new Date();
}

/**
 * Evaluates the status of an emergency appeal at a given reference time (`now`).
 */
export function getAppealStatus(
  appeal: EmergencyAppeal,
  now: Date = getAppealsNow()
): AppealStatus {
  const startTime = new Date(appeal.startAt).getTime();
  const endTime = new Date(appeal.endAt).getTime();
  const currentTime = now.getTime();

  if (currentTime < startTime) {
    return "upcoming";
  }
  if (currentTime >= endTime) {
    return "concluded";
  }
  return "active";
}

/**
 * Filters and sorts active appeals deterministically:
 * 1. Highest priority
 * 2. Most recent startAt
 * 3. Fallback to id / slug
 */
export function getActiveAppeals(
  appeals: EmergencyAppeal[],
  now: Date = getAppealsNow()
): EmergencyAppeal[] {
  return appeals
    .filter((a) => getAppealStatus(a, now) === "active")
    .sort((a, b) => {
      if (b.priority !== a.priority) {
        return b.priority - a.priority;
      }
      const startB = new Date(b.startAt).getTime();
      const startA = new Date(a.startAt).getTime();
      if (startB !== startA) {
        return startB - startA;
      }
      return a.id.localeCompare(b.id);
    });
}

/**
 * Filters and sorts concluded appeals deterministically:
 * 1. Most recently concluded (endAt descending)
 * 2. Fallback to id / slug
 */
export function getConcludedAppeals(
  appeals: EmergencyAppeal[],
  now: Date = getAppealsNow()
): EmergencyAppeal[] {
  return appeals
    .filter((a) => getAppealStatus(a, now) === "concluded")
    .sort((a, b) => {
      const endB = new Date(b.endAt).getTime();
      const endA = new Date(a.endAt).getTime();
      if (endB !== endA) {
        return endB - endA;
      }
      return a.id.localeCompare(b.id);
    });
}

/**
 * Selects the featured appeal for the homepage:
 * - IF one or more ACTIVE appeals exist: highest priority active appeal
 * - ELSE IF one or more CONCLUDED appeals exist: most recently concluded appeal
 * - ELSE: null
 */
export function getHomepageFeaturedAppeal(
  appeals: EmergencyAppeal[],
  now: Date = getAppealsNow()
): { appeal: EmergencyAppeal | null; status: AppealStatus | null } {
  const activeAppeals = getActiveAppeals(appeals, now);
  if (activeAppeals.length > 0) {
    return { appeal: activeAppeals[0], status: "active" };
  }

  const concludedAppeals = getConcludedAppeals(appeals, now);
  if (concludedAppeals.length > 0) {
    return { appeal: concludedAppeals[0], status: "concluded" };
  }

  return { appeal: null, status: null };
}

/**
 * Calculates the ms remaining until the next boundary for an appeal (if any) relative to reference time `now`.
 * Used for setting a single timeout for live midnight transitions.
 */
export function getNextBoundaryDelay(
  appeals: EmergencyAppeal[],
  now: Date = getAppealsNow()
): number | null {
  const currentTime = now.getTime();
  let nextBoundary: number | null = null;

  for (const appeal of appeals) {
    const startTime = new Date(appeal.startAt).getTime();
    const endTime = new Date(appeal.endAt).getTime();

    if (startTime > currentTime) {
      if (nextBoundary === null || startTime < nextBoundary) {
        nextBoundary = startTime;
      }
    }
    if (endTime > currentTime) {
      if (nextBoundary === null || endTime < nextBoundary) {
        nextBoundary = endTime;
      }
    }
  }

  if (nextBoundary === null) return null;
  return Math.max(100, nextBoundary - currentTime);
}
