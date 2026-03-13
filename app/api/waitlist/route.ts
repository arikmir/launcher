import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Temporary file-based storage (replace with Supabase later)
const WAITLIST_FILE = path.join(process.cwd(), "data", "waitlist.json");

async function getWaitlist(): Promise<string[]> {
  try {
    const data = await fs.readFile(WAITLIST_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveWaitlist(emails: string[]): Promise<void> {
  const dir = path.dirname(WAITLIST_FILE);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(WAITLIST_FILE, JSON.stringify(emails, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();
    const waitlist = await getWaitlist();

    if (waitlist.includes(normalizedEmail)) {
      return NextResponse.json(
        { error: "You're already on the waitlist" },
        { status: 409 }
      );
    }

    waitlist.push(normalizedEmail);
    await saveWaitlist(waitlist);

    console.log(`[Waitlist] New signup: ${normalizedEmail}`);

    return NextResponse.json(
      { message: "Successfully joined the waitlist" },
      { status: 201 }
    );
  } catch (error) {
    console.error("[Waitlist] Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Protected route - would need auth in production
  try {
    const waitlist = await getWaitlist();
    return NextResponse.json({ count: waitlist.length, emails: waitlist });
  } catch {
    return NextResponse.json({ error: "Failed to fetch waitlist" }, { status: 500 });
  }
}
