export async function onRequest(context: { request: Request }) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (context.request.method === "OPTIONS") {
    return new Response(null, { headers });
  }

  if (context.request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...headers, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await context.request.json();

    const formData = new FormData();
    formData.append("name", body.name || "");
    formData.append("phone", body.phone || "");
    formData.append("email", body.email || "");
    formData.append("service", body.service || "");
    formData.append("message", body.message || "");
    formData.append("_subject", `New Inquiry from ${body.name || "Unknown"} - Alok Service`);

    const res = await fetch("https://formsubmit.co/ajax/alokservicebd@gmail.com", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("Formsubmit error");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...headers, "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ success: false, error: "Failed to send" }), {
      status: 500,
      headers: { ...headers, "Content-Type": "application/json" },
    });
  }
}
