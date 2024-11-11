import obtenerEstilos from "../models/modeloEstilos.js";

const controladorEstilos=(async (req, res)=>{
    const peticionEstilos = await req.params.peticionEstilos
    const pathEstilos = obtenerEstilos(peticionEstilos)
    res.sendFile(pathEstilos, (error)=>{
        if(error){
            console.log("Error al obtener los estilos", error)
            res.status(404)
        }
        else{
            res.status(200)
        }
    })
})

export {controladorEstilos}