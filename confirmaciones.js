document.addEventListener("DOMContentLoaded", () => {
  const link = document.getElementById("link-confirmacion");
  if (!link) return;

  const baseForm = "https://docs.google.com/forms/d/e/1FAIpQLSdrZOEtFFAGNVDW604yZcEgoslYI-Y_dlMeD82iGYHmr5PLFA/viewform?usp=pp_url";

  const params = new URLSearchParams(window.location.search);
  const idParam = params.get("id");

  // Esperar a que window.invitados esté listo (máxima seguridad)
  if (!idParam || typeof window.invitados === "undefined") {
    link.href = baseForm;
    return;
  }

  const invitado = window.invitados.find(
    inv => String(inv.id) === String(idParam)
  );

  if (!invitado) {
    link.href = baseForm;
    return;
  }

  const nombreEncoded = encodeURIComponent(invitado.nombre);
  const pasesEncoded = encodeURIComponent(invitado.pases);

  link.href = `${baseForm}&entry.1297710131=${nombreEncoded}&entry.1099367965=${pasesEncoded}`;
});
