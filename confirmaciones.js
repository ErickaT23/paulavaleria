document.addEventListener("DOMContentLoaded", () => {
    const link = document.getElementById("link-confirmacion");
    if (!link) return;
  
    const baseForm =
      "https://docs.google.com/forms/d/e/1FAIpQLSdrZOEtFFAGNVDW604yZcEgoslYI-Y_dlMeD82iGYHmr5PLFA/viewform?usp=pp_url&entry.1297710131=Familia+B%C3%A4tzel+Mej%C3%ADa&entry.1099367965=3";
  
    const params = new URLSearchParams(window.location.search);
    const idParam = params.get("id");
  
    if (!idParam || !window.invitados) {
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
  
    const prefilled =
      `${baseForm}` +
      `&entry.1297710131=${encodeURIComponent(invitado.nombre)}` +
      `&entry.1099367965=${encodeURIComponent(invitado.pases)}`;
  
    link.href = prefilled;
  });
  