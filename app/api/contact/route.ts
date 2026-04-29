export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, organizacion, cargo, email, mensaje } = body;

    if (!nombre || !email || !mensaje) {
      return Response.json(
        { error: "Nombre, email y mensaje son obligatorios." },
        { status: 400 }
      );
    }

    // In production, send email or store in DB.
    // For now, just log and return success.
    console.log("Nuevo contacto:", { nombre, organizacion, cargo, email, mensaje });

    return Response.json({ success: true, message: "Mensaje recibido correctamente." });
  } catch {
    return Response.json(
      { error: "Error procesando la solicitud." },
      { status: 500 }
    );
  }
}
