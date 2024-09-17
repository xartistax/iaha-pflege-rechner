// pages/api/zoho-token.js

import { NextResponse } from "next/server";


export async function POST(req : Request, res : Response) {
    if (req.method !== 'POST') {
      return NextResponse.json({ message: 'Only POST requests are allowed' }, { status: 405 });
    }
  
    try {
      // Your Zoho OAuth token request URL and parameters
      const url = 'https://accounts.zoho.eu/oauth/v2/token';
      const requiredEnvironmentVariables = ['ZOHO_CLIENT_ID', 'ZOHO_CLIENT_SECRET', 'ZOHO_REFRESH_TOKEN' ];
  
      const params = new URLSearchParams({
        client_id: process.env.NEXT_PUBLIC_ZOHO_CLIENT_ID!,
        client_secret: process.env.NEXT_PUBLIC_ZOHO_CLIENT_SECRET!,
        redirect_uri: process.env.NEXT_PUBLIC_ZOHO_REDIRECT_URI!,
        grant_type: 'refresh_token',
        refresh_token: process.env.NEXT_PUBLIC_ZOHO_REFRESH_TOKEN!
      });


      console.log(params)
  
      // Make the POST request to the Zoho OAuth API
      const response = await fetch(`${url}?${params.toString()}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // Check if the response is successful
      if (!response.ok) {
        const errorText = await response.text();
        return NextResponse.json({ error: errorText }, { status: 405 });
      }
  
      const data = await response.json();
      console.log(data)
      return NextResponse.json(data, { status: 200 });
    } catch (error) {
      console.error('Error fetching Zoho token:', error);
      return NextResponse.json({ error: 'Failed to fetch Zoho token' }, { status: 500 });
    }
  }
  