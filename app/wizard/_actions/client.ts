export async function updateUserCurrencyClient(currency: string) {
  const res = await fetch("/api/user-settings", {
    method: "POST",
    body: JSON.stringify({ currency }),
    headers: { "Content-Type": "application/json" },
  })

  if (!res.ok) {
    throw new Error("Failed to update currency")
  }

  return res.json()
}
