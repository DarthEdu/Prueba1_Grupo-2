import { Router } from "express";
import { controladorImagen} from "../controllers/controladorImagenes.js";
import { controladorParticipantes } from "../controllers/controladorImagenes.js";

const enrutador = Router()
const enrutadorParticipantes = Router()
enrutador.get('/:nombreImg', controladorImagen)
enrutadorParticipantes.get('/:nombrePar', controladorParticipantes)
export {enrutador, enrutadorParticipantes}