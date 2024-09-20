import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const tokenRefreshUrl = process.env.TOKEN_REFRESH_URL || 'http://localhost:3001/api/zoho/token/refresh';

        console.log('Fetching token from:', tokenRefreshUrl);
        
        const tokenResponse = await fetch(tokenRefreshUrl , {
            method: 'POST',
        });

        if (!tokenResponse.ok) {
            console.error('Failed to fetch token. Status:', tokenResponse.status, 'StatusText:', tokenResponse.statusText);
            throw new Error('Failed to fetch Zoho token');
        }

        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;

        console.log("Access Token:", accessToken);

        const url = 'https://www.zohoapis.eu/crm/v2/Leads';
        const body = await req.json();

        console.log('Sending lead data to Zoho:', body);

        const response = await fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Zoho-oauthtoken ${accessToken}`
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            console.error('Error sending data to Zoho:', response.statusText);
            return NextResponse.json({ error: 'Failed to create Zoho lead' }, { status: 500 });
        }

        const responseData = await response.json();
        return NextResponse.json({ response: responseData }, { status: 200 });

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    }
}
