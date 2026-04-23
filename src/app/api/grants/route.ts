import { NextResponse } from "next/server";
import { getGrants, getGrantById } from "@/features/grants/grant.service";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const apiKey = searchParams.get("api_key");

  if (!apiKey || apiKey !== process.env.API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const grantId = searchParams.get("id");
  const sector = searchParams.get("sector");
  const country = searchParams.get("country");
  const page = parseInt(searchParams.get("page") || "1");

  try {
    if (grantId) {
      const grant = await getGrantById(grantId);
      if (!grant) {
        return NextResponse.json({ error: "Grant not found" }, { status: 404 });
      }
      return NextResponse.json({ grant });
    }

    const { grants, pagination } = await getGrants({
      sector: sector || undefined,
      country: country || undefined,
      page,
      pageSize: 20,
    });

    return NextResponse.json({ grants, pagination });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}