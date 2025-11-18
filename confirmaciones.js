document.addEventListener("DOMContentLoaded", () => {
    const link = document.getElementById("link-confirmacion");
    if (!link) return;
  
    const baseForm =
      "https://docs.google.com/forms/d/e/1FAIpQLSfSKRscViKRvMGlQg2QjwDsn4Gs1bqlwhaTObeau7QSJ-W23A/viewform?usp=pp_url";
  
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
  