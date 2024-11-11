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
export {ControladorPagina, controladorInicio}