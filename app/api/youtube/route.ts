import { NextResponse } from "next/server";

const API_KEY = process.env.YOUTUBE_API_KEY!;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID!;

export async function GET() {
    try {
        const res = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=10&type=video`,
            { next: { revalidate: 3600 } } // cache for 1 hour
        );

        if (!res.ok) {
            const errorData = await res.json();
            return NextResponse.json(errorData, { status: res.status });
        }

        const data = await res.json();
        return NextResponse.json(data.items);
    } catch (error) {
        console.error("YouTube API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error", details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}
