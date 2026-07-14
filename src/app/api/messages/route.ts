import { NextResponse } from "next/server";
import { connectDb, hasDb } from "@/lib/db";
import { sendMessageEmails } from "@/lib/email";
import type { MessageInput } from "@/lib/types";

export async function POST(req: Request) {
  let body: Partial<MessageInput>;
  try {
    body = (await req.json()) as Partial<MessageInput>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.name || !body.email || !body.comment) {
    return NextResponse.json(
      { error: "name, email and comment are required" },
      { status: 400 }
    );
  }

  const message: MessageInput = {
    name: body.name,
    email: body.email,
    comment: body.comment,
  };

  if (!hasDb()) {
    console.log("[messages] MONGODB_URI not set — message received:", message);
    await sendMessageEmails(message);
    return NextResponse.json({ ok: true, stored: false });
  }

  try {
    await connectDb();
    const { MessageModel } = await import("@/lib/models");
    const stored = await MessageModel.create(message);
    await sendMessageEmails(message);
    return NextResponse.json({ ok: true, stored: true, id: stored._id });
  } catch (err) {
    console.error("[messages] failed to store message:", err);
    return NextResponse.json(
      { error: "Failed to store message" },
      { status: 500 }
    );
  }
}
