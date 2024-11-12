import {obtenerImagen} from '../models/modeloImagen.js';
import { obtenerParticipantes } from '../models/modeloImagen.js';

const controladorImagen = async(req, res)=>{
    const nombreImg = await req.params.nombreImg
    const pathImg = obtenerImagen(nombreImg)
    res.sendFile(pathImg, (error)=>{
        if(error){
            console.log("Error al obtener el recurso", error)
            res.status(404)
        }
    })
}

const controladorParticipantes = async(req, res)=>{
    const nombrePar = await req.params.nombrePar
    const pathPar = obtenerParticipantes(nombrePar)
    res.sendFile(pathPar, (error)=>{
        if(error){
            console.log("Error al obtener el recurso", error)
            res.status(404)
        }
    })
}

export {controladorImagen, controladorParticipantes}
