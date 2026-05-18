export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  // Handle OPTIONS preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Securely retrieve the NVIDIA API key from environment variables
    // Check NVIDIA_API_KEY first, fallback to VITE_NVIDIA_API_KEY (both can be configured in Vercel),
    // and as a last resort, check the client's Authorization header.
    const apiKey = 
      process.env.NVIDIA_API_KEY || 
      process.env.VITE_NVIDIA_API_KEY || 
      req.headers.authorization?.replace('Bearer ', '');

    if (!apiKey) {
      console.error('NVIDIA API Key is missing. Please set NVIDIA_API_KEY or VITE_NVIDIA_API_KEY in Vercel.');
      return res.status(401).json({ 
        error: 'Unauthorized', 
        message: 'NVIDIA API Key is missing. Please configure it in your Vercel project environment variables.' 
      });
    }

    // Safely parse incoming body
    const requestBody = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    // Call the official NVIDIA API securely on the backend
    const nvidiaResponse = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    });

    // Check if the NVIDIA API returned an error
    if (!nvidiaResponse.ok) {
      const errorText = await nvidiaResponse.text();
      console.error(`NVIDIA API responded with status ${nvidiaResponse.status}:`, errorText);
      try {
        const errorJson = JSON.parse(errorText);
        return res.status(nvidiaResponse.status).json(errorJson);
      } catch {
        return res.status(nvidiaResponse.status).json({ 
          error: 'NVIDIA API Error', 
          message: errorText || `Status code: ${nvidiaResponse.status}` 
        });
      }
    }

    const data = await nvidiaResponse.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error in Vercel Serverless Function (api/nvidia):', error);
    return res.status(500).json({ 
      error: 'Internal Server Error', 
      message: error.message 
    });
  }
}
