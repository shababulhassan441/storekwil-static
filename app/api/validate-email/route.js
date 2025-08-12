import { NextResponse } from 'next/server';

const validateEmail = async (email) => {
  const apiKey = process.env.POSTCODER_API_KEY;

  if (!email) {
    return { error: 'Email is required' };
  }

  try {
    const response = await fetch(
      `https://ws.postcoder.com/pcw/${apiKey}/email/${encodeURIComponent(email)}?format=json`
    );

    const responseText = await response.text();

    if (!response.ok) {
      return { error: responseText, status: response.status };
    }

    try {
      const data = JSON.parse(responseText);
      return { data, status: 200 };
    } catch (jsonError) {
      return { error: 'Invalid JSON response from Postcoder API', status: 500 };
    }
  } catch (error) {
    return { error: `Error validating email: ${error}`, status: 500 };
  }
};

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');
  
  const result = await validateEmail(email);

  if (result.error) {
    return NextResponse.json({ error: result.error }, { status: result.status || 400 });
  }

  return NextResponse.json(result.data, { status: result.status || 200 });
};
