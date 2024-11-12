import  api  from "../models/privada.js";
const ControladorPagina = async (req, res)=>{
    try{
        const paginaMetereo = await api.pagina()
        res.status(200).sendFile(paginaMetereo)
    }catch(error){
        console.log("Error de envio", error)
    }

}
const controladorInicio = async (req, res)=>{
    try{
        const paginaInicio = await api.paginaInicio()
        res.status(200).sendFile(paginaInicio)
    }catch(error){
        console.log("Error en cargar la pagina", error)
        res.status(404)
    }
}

const controladorFACE = async (req, res)=>{
    try{
        const paginaFaceIO = await api.paginaFACE()
        res.status(200).sendFile(paginaFaceIO)
    }catch(error){
        console.log("Error en cargar la pagina", error)
        res.status(404)
    }
}

const controladorTLE = async (req, res)=>{
    try{
        const paginaTLE = await api.paginaTLE()
        res.status(200).sendFile(paginaTLE)
    }catch(error){
        console.log("Error en cargar la pagina", error)
        res.status(404)
    }
}



export {ControladorPagina, controladorInicio, controladorFACE, controladorTLE}