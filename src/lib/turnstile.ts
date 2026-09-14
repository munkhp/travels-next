// Cloudflare Turnstile — server-side verification of the token the widget
// hands the browser. Mirrors the optional-by-default shape of hasDb()/hasEmail():
// with no secret configured, verification is skipped so local dev still works.
const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export function hasTurnstile(): boolean {
  return Boolean(process.env.TURNSTILE_SECRET_KEY);
}

type VerifyResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export async function verifyTurnstile(
  token: string | undefined,
  ip?: string | null
): Promise<boolean> {
  if (!hasTurnstile()) {
    console.log("[turnstile] TURNSTILE_SECRET_KEY not set — skipping check");
    return true;
  }
  if (!token) return false;

  const body = new URLSearchParams({
    secret: process.env.TURNSTILE_SECRET_KEY as string,
    response: token,
  });
  if (ip) body.set("remoteip", ip);

  try {
    const res = await fetch(VERIFY_URL, { method: "POST", body });
    const data = (await res.json()) as VerifyResponse;
    if (!data.success) {
      console.warn("[turnstile] rejected:", data["error-codes"]?.join(", "));
    }
    return data.success;
  } catch (err) {
    // A failed verification request must not let an unverified request through.
    console.error("[turnstile] verification request failed:", err);
    return false;
  }
}

export function clientIp(req: Request): string | null {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("cf-connecting-ip");
}
