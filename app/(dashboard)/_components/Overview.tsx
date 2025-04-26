"use client";

import { DateRangePicker } from "@/components/ui/date-range-picker";
import { MAX_DATE_RANGE_DAYS } from "@/lib/constants";
import { UserSettings } from "@prisma/client";
import { differenceInDays, startOfMonth } from "date-fns";
import React, { useState } from "react";
import { toast } from "sonner";
import StatsCards from "./StatsCards";
import CategoriesStats from "./CategoriesStats";

function Overview({ userSettings }: { userSettings: UserSettings }) {
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: startOfMonth(new Date()),
    to: new Date(),
  });
  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-2 pt-6 px-45">
        <h2 className="text-3xl font-bold">Overview</h2>
        <div className="flex items-center">
          <DateRangePicker
            initialDateFrom={dateRange.from}
            initialCompareTo={dateRange.to}
            showCompare={false}
            onUpdate={(values) => {
              const { from, to } = values.range;
              if (!from || !to) return;
              if (differenceInDays(to, from) > MAX_DATE_RANGE_DAYS) {
                toast.error(
                  `Date range cannot be more than ${MAX_DATE_RANGE_DAYS} days!`
                );
                return;
              }
              setDateRange({ from, to });
            }}
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 p-45 pt-10 pb-10">
      <StatsCards
      userSettings={userSettings}
      from={dateRange.from}
      to={dateRange.to}
      />
      <CategoriesStats
      userSettings={userSettings}
      from={dateRange.from}
      to={dateRange.to}
      />
      </div>
    </>
  );
}

export default Overview;
