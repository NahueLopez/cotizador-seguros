export const MARCAS = [
    {id:1, nombre:'Europeo'},
    {id:2, nombre:'Americano'},
    {id:3, nombre:'Asiatico'},
];


//Creamos una variable y hacemos un listado de los años solo trae los ultimso 20
const YEARMAX = new Date().getFullYear();
export const YEARS = Array.from(
    new Array(20),
     (valor, index) => YEARMAX - index
    );

export const PLANES = [
    {id:1, nombre:'Basico'},
    {id:2, nombre:'Completo'},
];