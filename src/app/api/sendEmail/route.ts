import { NextRequest, NextResponse } from 'next/server';
import { isCorrectToken } from 'src/app/helpers/api/tokenCheck';
import { parseRequestBody } from 'src/app/helpers/dataFormatting/parseRequestBody';

export async function POST(
    req: NextRequest,
): Promise<NextResponse<{ status: number } | { message: string }>> {
    const request = await parseRequestBody(req);
    if (!isCorrectToken(req.headers)) {
        return NextResponse.json(
            { message: 'Unauthorised Request' },
            { status: 401 },
        );
    }

    if (!request) {
        return NextResponse.json({ status: "400", message: 'Invalid request body' });
    }
    try {
        const response = await fetch(`${process.env.MAKE_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        });
        return NextResponse.json({ status: response.status, message: response.statusText });
    } catch (error) {
        return NextResponse.json({ status: "500", message: 'Internal Server Error' });
    }
};