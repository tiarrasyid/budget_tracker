"use client";

import { useOverview } from "@/hooks/useOverview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { TrendingDown, TrendingUp, Wallet } from "lucide-react";
import CountUp from "react-countup";
import { useMemo } from "react";

interface OverviewCardProps {
  from: Date;
  to: Date;
}

export function OverviewCard({ from, to }: OverviewCardProps) {
  const { data, isLoading, error } = useOverview({ from, to });

  const income = data?.income ?? 0;
  const expense = data?.expense ?? 0;
  const balance = useMemo(() => income - expense, [income, expense]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-32 w-full rounded-xl" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-sm p-4 border rounded-xl">
        Failed to load overview. Please try again.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard 
        title="Income" 
        value={income} 
        icon={<TrendingUp className="h-10 w-10 text-green-500" />}
        iconBg="bg-green-100"
      />
      <StatCard 
        title="Expense" 
        value={expense} 
        icon={<TrendingDown className="h-10 w-10 text-rose-500" />}
        iconBg="bg-rose-100"
      />
      <StatCard 
        title="Balance" 
        value={balance} 
        icon={<Wallet className="h-10 w-10 text-violet-500" />}
        iconBg="bg-violet-100"
      />
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  iconBg: string;
}

function StatCard({ title, value, icon, iconBg }: StatCardProps) {
  return (
    <Card className="rounded-2xl shadow-md hover:shadow-lg transition">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={`rounded-full p-2 ${iconBg}`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          <CountUp 
            end={value} 
            decimals={2} 
            separator="," 
            prefix="Rp " 
            duration={1} 
          />
        </div>
      </CardContent>
    </Card>
  );
}
