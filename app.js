let process = require('process')
let {listar, agregar} = require('./funcionesDeTareas')

let operacion

if(process.argv[2] !== undefined ){
    operacion = process.argv[2].toLowerCase()
}

switch (operacion) {
    case "listar":
        console.log(listar());
        break;
    case "agregar":
        let parametro

        if(process.argv[3] !== undefined ){
            parametro = process.argv[3].toLowerCase()
            agregar(parametro);
            console.log("Tarea Añadida con exito");
        }else{
            return console.log("Por favor enviar un parametro para añadir una tarea");
        }
        
        break;
    case undefined:
        console.log("Debes pasar una operacion por ahora solo tenemos disponibles las siguiente \n1- listar");
        break;
    default:
        console.log("Debes pasar un parametro correcto");
        break;
}