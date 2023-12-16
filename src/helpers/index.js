export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year
}


export function carcularMarca(marca){
    let incremento

    switch (marca) {
        case "1":
            incremento = 1.30;        
            break;
        case "2":
            incremento = 1.15;
            break;
        case "3":
            incremento = 1.05; 
            break;
        default:
            break;
    }

    return incremento

}

export function calcularPlanplan(plan){
    return plan === "1" ? 1.2 : 4.5
}

export function formatearDinero(cantidad){
    return cantidad.toLocaleString('es-AR',{
        style:"currency",
        currency: "ARS",
    })
}