import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Webhook n8n url from env variables (defaults to a placeholder if not set)
    const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;
    
    // If webhook is configured, send the data to n8n
    if (N8N_WEBHOOK_URL) {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          source: "Degre Celsius Website - Request Quote",
          timestamp: new Date().toISOString()
        }),
      });
      
      if (!response.ok) {
        console.error("n8n webhook error:", await response.text());
        // We don't throw here to still show success to user even if automation fails
      }
    } else {
      console.log("No n8n webhook URL configured. Form data:", data);
    }
    
    // Always return success to the client (we can implement DB save here later)
    return NextResponse.json({ success: true, message: "Devis reçu avec succès" }, { status: 200 });
  } catch (error) {
    console.error("Error processing quote request:", error);
    return NextResponse.json(
      { success: false, error: "Erreur lors du traitement de la demande" },
      { status: 500 }
    );
  }
}
