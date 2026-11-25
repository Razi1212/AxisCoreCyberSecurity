
export async function POST(request) {
  try {
    // 1. Read form data
    const data = await request.json();

    const name =
      typeof data.name === "string" ? data.name.trim() : "";

    const email =
      typeof data.email === "string" ? data.email.trim() : "";

    const company =
      typeof data.company === "string" ? data.company.trim() : "";

    const service =
      typeof data.service === "string" ? data.service.trim() : "";

    const message =
      typeof data.message === "string" ? data.message.trim() : "";

    // 2. Validate required fields
    if (!name || !email || !service || !message) {
      return Response.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // 3. Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return Response.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // 4. Validate service
    const allowedServices = [
      "Threat Detection",
      "Network Security",
      "Data Protection",
      "Security Consulting",
      "Other",
    ];

    if (!allowedServices.includes(service)) {
      return Response.json(
        {
          success: false,
          message: "Invalid service selection.",
        },
        { status: 400 }
      );
    }

    // 5. Validate field lengths
    if (
      name.length > 100 ||
      email.length > 254 ||
      company.length > 150 ||
      message.length > 5000
    ) {
      return Response.json(
        {
          success: false,
          message: "One or more fields are too long.",
        },
        { status: 400 }
      );
    }

    // 6. Read environment variables
    const scriptUrl = process.env.APPS_SCRIPT_URL;
    const token = process.env.AXISCORE_TOKEN;

    if (!scriptUrl || !token) {
      console.error(
        "Missing APPS_SCRIPT_URL or AXISCORE_TOKEN environment variable."
      );

      return Response.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    // 7. Send request to Google Apps Script
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        company,
        service,
        message,
        token,
      }),
      cache: "no-store",
      redirect: "follow",
    });

    // 8. Read Google Apps Script response
    const responseText = await response.text();

    let result;

    try {
      result = JSON.parse(responseText);
    } catch {
      console.error(
        "Google Apps Script returned a non-JSON response:",
        responseText
      );

      return Response.json(
        {
          success: false,
          message: "Invalid response from email service.",
        },
        { status: 502 }
      );
    }

    // 9. Check email service result
    if (!response.ok || !result.success) {
      console.error("Google Apps Script error:", {
        status: response.status,
        result,
      });

      return Response.json(
        {
          success: false,
          message:
            result.message ||
            "Unable to send your inquiry. Please try again.",
        },
        { status: 502 }
      );
    }

    // 10. Success
    console.log("AXISCORE contact inquiry sent successfully.");

    return Response.json(
      {
        success: true,
        message: "Your inquiry has been sent successfully!",
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("AXISCORE Contact API Error:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
