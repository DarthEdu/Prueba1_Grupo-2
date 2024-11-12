import {fileURLToPath} from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url)
const __dirname= path.dirname(__filename)


const obtenerImagen=(nombreImg)=>{
        const urlNative = path.join(__dirname, '..', '..','public','images' , nombreImg);
        return urlNative
    }

const obtenerParticipantes=(nombrePar)=>{
    const urlPar = path.join(__dirname, '..', '..','public','images' , 'participantes', nombrePar)
    return urlPar
}

export {obtenerImagen, obtenerParticipantes}
