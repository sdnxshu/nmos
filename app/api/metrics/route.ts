// app/api/metrics/route.ts
import { NextResponse } from "next/server";

export async function GET() {
    const metrics = {
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        nodeVersion: process.version,
    };

    return NextResponse.json(metrics);
}
