// pages/api/zoho-token.js

import { NextResponse } from "next/server";


export async function POST(req : Request, res : Response) {
    if (req.method !== 'POST') {
      return NextResponse.json({ message: 'Only POST requests are allowed' }, { status: 405 });
    }
  
    try {
      // Your Zoho OAuth token request URL and parameters
      const url = 'https://www.zohoapis.eu/crm/v2/Leads';

      const tokenResponse = await fetch('http://localhost:3000/api/zoho/token/refresh', {
        method: 'POST',
      });

      if (!tokenResponse.ok) {
        return NextResponse.json({ error: 'Failed to refresh Zoho token' }, { status: 500 });
      }

      const tokenData = await tokenResponse.json();
      const accessToken = tokenData.access_token;
      const body = await req.json();
  


      

      console.log("token: ", accessToken )

  
      // Make the POST request to the Zoho OAuth API
      const response = await fetch(`${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Zoho-oauthtoken ${accessToken}`
        },
        body: JSON.stringify(body)
        
      
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
      return NextResponse.json({ error: 'Failed to fetch Zoho token trying to create' }, { status: 500 });
    }
  }
  