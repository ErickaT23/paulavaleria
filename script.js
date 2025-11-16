// Función para abrir la invitación (sobre) y reproducir la música
function abrirInvitacion() {
    // Obtener el sobre y la invitación
    const envelope = document.getElementById('envelope');
    const invitacion = document.getElementById('invitacion');
    
    // Añadir clase para animar la apertura del sobre
    envelope.classList.add('open');

    // Mostrar la invitación después de la animación
    setTimeout(() => {
        envelope.style.display = 'none';
        invitacion.style.display = 'block';
        
        // Reproducir la música solo después de abrir el sobre
        const musica = document.getElementById('musica');
        if (musica) {
            musica.play();
        }
    }, 1000); // Ajustar tiempo para esperar la animación de apertura del sobre
}

// Asignar el evento de clic al sello para abrir el sobre
document.addEventListener('DOMContentLoaded', function() {
    const seal = document.getElementById('seal');
    if (seal) {
        seal.addEventListener('click', abrirInvitacion);
    }

    // Iniciar el contador y cargar los datos del invitado al cargar la página
    iniciarContador();
    cargarDatosInvitado();
});


// Función para iniciar el contador de la fecha del evento
function iniciarContador() {
    const eventoFecha = new Date("December 06, 2025 00:00:00").getTime();

    setInterval(() => {
        const ahora = new Date().getTime();
        const diferencia = eventoFecha - ahora;

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById("dias").innerText = dias;
        document.getElementById("horas").innerText = horas;
        document.getElementById("minutos").innerText = minutos;
        document.getElementById("segundos").innerText = segundos;
    }, 1000);
}

function changePhoto(element) {
    const mainPhotoModal = document.getElementById('main-photo-modal');
    mainPhotoModal.src = element.src;
    openModal();
}

function openModal() {
    const modal = document.getElementById('photo-modal');
    modal.style.display = 'flex';
}

function closeModal(event) {
    if (event.target.id === 'photo-modal' || event.target.classList.contains('close')) {
        const modal = document.getElementById('photo-modal');
        modal.style.display = 'none';
    }
}



//Funcion para confirmar la asistencia 
function confirmarAsistencia() {
    const mensaje = `Hola, confirmo mi asistencia al fabuloso cumpleaños de nuestra querida Maura`;
    const numeroTelefono = '50236011737'; // Reemplaza con el número de WhatsApp al cual se enviará el mensaje

    const enlaceWhatsapp = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(mensaje)}`;
    
    // Abre el enlace de WhatsApp
    window.open(enlaceWhatsapp, '_blank');
}
//Funcion para abrir waze o maps
//fiesta
function elegirAplicacionOtraDireccion() {
    const enlaceGoogleMaps = 'https://maps.app.goo.gl/YokAqLQi9DA7hXXs8';
    const enlaceWaze = 'https://waze.com/ul?ll=14.558065,-90.729567&navigate=yes';

    // Intentar abrir Google Maps primero
    window.open(enlaceGoogleMaps, '_blank');

    // Intentar abrir Waze (en caso de que Google Maps no esté disponible)
    setTimeout(() => {
        window.open(enlaceWaze, '_blank');
    }, 1000); // Retraso para permitir que el primer enlace se abra si está disponible
}

// script-invitados.js
document.addEventListener("DOMContentLoaded", () => {
    // Obtener id desde la URL (ejemplo: ?id=2)
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
  
    // Buscar en el archivo invitados.js
    const invitado = invitados.find(inv => inv.id === id);
  
    if (invitado) {
      document.getElementById("nombre-invitado").textContent = invitado.nombre;
      document.getElementById("num-pases").textContent = `${invitado.pases} pase${invitado.pases > 1 ? "s" : ""} con mucho cariño`;
    } else {
      // Si no hay coincidencia
      document.getElementById("nombre-invitado").textContent = "Invitado Especial";
      document.getElementById("num-pases").textContent = "Pases reservados con mucho cariño";
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const invitado = invitados.find(inv => inv.id === id);
  
    const baseForm = "https://docs.google.com/forms/d/e/1FAIpQLSfSKRscViKRvMGlQg2QjwDsn4Gs1bqlwhaTObeau7QSJ-W23A/viewform?usp=pp_url";
  
    if (invitado) {
      // Construir URL con valores dinámicos
      const prefilled = `${baseForm}&entry.1297710131=${encodeURIComponent(invitado.nombre)}&entry.1099367965=${invitado.pases}`;
      document.getElementById("link-confirmacion").setAttribute("href", prefilled);
    } else {
      // Si no hay ID válido, mandar al form vacío
      document.getElementById("link-confirmacion").setAttribute("href", baseForm);
    }
  });
  

document.addEventListener("DOMContentLoaded", () => {
  const cantidad = 40; // número de diamantes
  for (let i = 0; i < cantidad; i++) {
    const sparkle = document.createElement("span");
    sparkle.classList.add("sparkle");

    // Posición aleatoria en toda la pantalla
    sparkle.style.top = Math.random() * 100 + "%";
    sparkle.style.left = Math.random() * 100 + "%";

    // Animaciones con tiempos distintos
    sparkle.style.animationDelay = (Math.random() * 3) + "s";
    sparkle.style.animationDuration = (2 + Math.random() * 2) + "s";

    document.body.appendChild(sparkle);
  }
});



