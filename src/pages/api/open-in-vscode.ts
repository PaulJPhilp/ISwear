import type { APIRoute } from 'astro';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export const POST: APIRoute = async ({ request }) => {
  console.log('Received request:', {
    method: request.method,
    headers: Object.fromEntries(request.headers.entries()),
  });

  try {
    // Log the raw request body for debugging
    const rawBody = await request.text();
    console.log('Raw request body:', rawBody);

    if (!rawBody) {
      return new Response(
        JSON.stringify({ error: 'Empty request body' }), 
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Parse the JSON manually
    let data;
    try {
      data = JSON.parse(rawBody);
    } catch (parseError) {
      console.error('Failed to parse JSON:', parseError);
      return new Response(
        JSON.stringify({ 
          error: 'Invalid JSON payload', 
          details: parseError.message,
          receivedBody: rawBody
        }), 
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    console.log('Parsed data:', data);

    const { path } = data;
    if (!path) {
      return new Response(
        JSON.stringify({ 
          error: 'Missing path parameter',
          receivedData: data 
        }), 
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    console.log('Opening file:', path);
    
    // Execute the VSCode CLI command
    const { stdout, stderr } = await execAsync(`code --reuse-window "${path}"`);
    console.log('Command output:', { stdout, stderr });
    
    return new Response(
      JSON.stringify({ success: true, stdout, stderr }), 
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Error opening file in VSCode:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to open file',
        details: error instanceof Error ? error.message : String(error)
      }), 
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
