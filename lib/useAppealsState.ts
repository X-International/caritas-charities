"use client";

import { useState, useEffect } from "react";
import { emergencyAppeals, EmergencyAppeal, AppealStatus } from "@/lib/content/appeals";
import {
  getAppealsNow,
  getHomepageFeaturedAppeal,
  getActiveAppeals,
  getConcludedAppeals,
  getAppealStatus,
  getNextBoundaryDelay,
} from "@/lib/appeals-lifecycle";

export function useAppealsState() {
  const [now, setNow] = useState<Date>(() => getAppealsNow());

  useEffect(() => {
    const delay = getNextBoundaryDelay(emergencyAppeals, now);
    if (delay !== null && delay > 0 && delay < 2147483647) {
      const timer = setTimeout(() => {
        setNow(getAppealsNow());
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [now]);

  const featured = getHomepageFeaturedAppeal(emergencyAppeals, now);
  const activeAppeals = getActiveAppeals(emergencyAppeals, now);
  const concludedAppeals = getConcludedAppeals(emergencyAppeals, now);

  return {
    now,
    featuredAppeal: featured.appeal,
    featuredStatus: featured.status as AppealStatus | null,
    activeAppeals,
    concludedAppeals,
    getAppealStatus: (appeal: EmergencyAppeal) => getAppealStatus(appeal, now),
  };
}
