import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.redirect("/sign-in");
  }

  const { currency } = await request.json();

  const userSettings = await prisma.userSettings.update({
    where: { userId: user.id },
    data: { currency },
  });

  return NextResponse.json(userSettings);
}
