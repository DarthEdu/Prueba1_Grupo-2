import {fileURLToPath} from 'url';
import path from 'path';

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)

const obtenerEstilos = (nomArchivo)=>{
    const ArchivoCSS = path.join(__dirname, '..', '..', 'public', 'styles', nomArchivo)
    return ArchivoCSS
}

export default obtenerEstilos