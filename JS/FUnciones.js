let ventanaPopup;

function abrirPopup() {
    const ventanaX = (window.innerWidth - 800) / 2; 
    const ventanaY = (window.innerHeight - 800) / 2; 
    
    window.open("https://unimerelsalvador.typeform.com/to/DA5A2HWO", "MiVentanaEmergente", `width=800,height=900,left=${ventanaX},top=${ventanaY}`);

    // Agregar un evento "load" al formulario dentro de la ventana emergente
    ventanaPopup.addEventListener("load", function() {
        const formulario = ventanaPopup.document.getElementById("MiVentanaEmergente");

        formulario.addEventListener("submit-button", function(event) {
            event.preventDefault(); // Evita que se envíe el formulario
            // Aquí puedes realizar cualquier validación del formulario si es necesario

            // Cerrar la ventana emergente
            ventanaPopup.close();
        });
    });
}