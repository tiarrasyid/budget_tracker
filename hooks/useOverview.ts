import { useQuery } from "@tanstack/react-query";

interface UseOverviewProps {
  from: Date;
  to: Date;
}

export function useOverview({ from, to }: UseOverviewProps) {
  const query = useQuery({
    queryKey: ["overview", from, to],
    queryFn: async () => {
      const res = await fetch(`/api/stats/balance?from=${from.toISOString()}&to=${to.toISOString()}`);
      if (!res.ok) throw new Error("Failed to fetch overview");
      return res.json();
    },
    refetchOnWindowFocus: false,
  });

  return query;
}
