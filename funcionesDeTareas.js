let fs = require('fs')
let tareas = require('./tareas.json')
let guardarJson = (dato) => fs.writeFileSync('./tareas.json', JSON.stringify(dato,null,2),'utf-8')

module.exports = {
    listar : () => {
        for (let i = 0; i < tareas.length; i++) {
            return `La tarea ${tareas[i].nombre} esta ${tareas[i].estado}`
        }
    },
    agregar: (nombre) => {
        let tareaNueva = {
            nombre,
            estado : "Pendiente"
        }
        tareas.push(tareaNueva)
        guardarJson(tareas)
    }
}