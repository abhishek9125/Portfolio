import { NextResponse } from 'next/server'
import { getResumePlainText } from '@/lib/resumeAtsText'

export async function GET() {
    const body = getResumePlainText()
    return new NextResponse(body, {
        status: 200,
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Content-Disposition': 'attachment; filename="Abhishek-Agarwal-Resume-ATS.txt"',
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
    })
}
