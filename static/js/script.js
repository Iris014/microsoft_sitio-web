console.log("Conexión exitosa")

function cotizarLicenciasWindows() {
    let empresa = prompt("Ingrese el nombre de su empresa: ");
    let cantidad = parseInt(prompt("¿Cuántas licencias de Windows necesita?: "));
    
    if (cantidad >= 50) {
        let descuento = (cantidad * 80000) * 0.2;
        let total = (cantidad * 80000) - descuento;
        alert("Empresa: " + empresa + "\nDescuento (20%): $" + descuento + "\nTotal: $" + total);
    } else if (cantidad >= 20) {
        let descuento = (cantidad * 80000) * 0.1;
        let total = (cantidad * 80000) - descuento;
        alert("Empresa: " + empresa + "\nDescuento (10%): $" + descuento + "\nTotal: $" + total);
    } else if (cantidad < 20 && cantidad > 0) {
        let total = cantidad * 80000;
        alert("Empresa: " + empresa + "\nDescuento: 0%\nTotal: $" + total);
    } else {
        alert("Ingrese una cantidad válida.");
    }
}