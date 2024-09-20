// pages/api/zoho-token.js

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        // Make a request to your internal API route to refresh the Zoho token
        const tokenResponse = await fetch('http://localhost:3001/api/zoho/token/refresh', {
            method: 'POST',
        });

        if (!tokenResponse.ok) {
            throw new Error('Failed to fetch Zoho token');
        }

        const tokenData = await tokenResponse.json();

        // Extract the access token from the response
        const accessToken = tokenData.access_token;

        // Log the access token (for debugging purposes)
        console.log("Access Token:", accessToken);


        /// CREATE A NEW LEAD IN ZOHO

        const url = 'https://www.zohoapis.eu/crm/v2/Leads';
        const body = await req.json();


        console.log(body)


        const response = await fetch(`${url}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Zoho-oauthtoken ${accessToken}`
          },
          body: JSON.stringify(body)
          
        
        });

        if (!response.ok) {
          return NextResponse.json({ error: 'Failed to refresh Zoho token' }, { status: 500 });
        }


        

        // Return the access token in the response
        return NextResponse.json({ response }, { status: 200 });


    } catch (error) {
        console.error('Error fetching Zoho token:', error);
        return NextResponse.json({ error: 'Failed to fetch Zoho token' }, { status: 500 });
    }
}
