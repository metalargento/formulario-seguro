const tipoSeguro = document.getElementById("tipoSeguro");
const precioSeguro = document.getElementById("precioSeguro");

tipoSeguro.addEventListener("change", () => {
    const selectedOption = tipoSeguro.value;
    let precio;

    switch (selectedOption) {
        case "basico":
            precio = "$500";            
            break;
        case "intermedio":
            precio = "$1000";
            break;
        case "premium":
            precio = "$1500";
            break;
        default:
            precio = "";
    }

    precioSeguro.textContent = `Costo: ${precio}`;
});
