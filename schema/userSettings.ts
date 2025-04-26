import { z } from "zod";
import { Currencies } from "@/lib/currencies";

export const UpdateUserCurrencySchema = z.object({
  currency: z.enum(
    Currencies.map((c) => c.value) as [string, ...string[]],
    {
      required_error: "Currency is required",
      invalid_type_error: "Invalid currency",
    }
  ),
});

export type UpdateUserCurrencyInput = z.infer<typeof UpdateUserCurrencySchema>;
