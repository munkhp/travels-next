import { NextResponse } from "next/server";
import { connectDb, hasDb } from "@/lib/db";
import { sendOrderEmails } from "@/lib/email";
import type { OrderInput } from "@/lib/types";

export async function POST(req: Request) {
  let body: Partial<OrderInput>;
  try {
    body = (await req.json()) as Partial<OrderInput>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.tourName || !body.name || !body.email) {
    return NextResponse.json(
      { error: "tourName, name and email are required" },
      { status: 400 }
    );
  }

  const order: OrderInput = {
    tourName: body.tourName,
    name: body.name,
    country: body.country ?? "",
    adults: body.adults ?? 1,
    children: body.children ?? 0,
    email: body.email,
    title: body.title ?? "Mr.",
    comment: body.comment ?? "",
    arrivalDate: body.arrivalDate ?? "",
  };

  if (!hasDb()) {
    console.log("[orders] MONGODB_URI not set — enquiry received:", order);
    await sendOrderEmails(order);
    return NextResponse.json({ ok: true, stored: false });
  }

  try {
    await connectDb();
    const { OrderModel } = await import("@/lib/models");
    const stored = await OrderModel.create(order);
    await sendOrderEmails(order);
    return NextResponse.json({ ok: true, stored: true, id: stored._id });
  } catch (err) {
    console.error("[orders] failed to store order:", err);
    return NextResponse.json(
      { error: "Failed to store order" },
      { status: 500 }
    );
  }
}
