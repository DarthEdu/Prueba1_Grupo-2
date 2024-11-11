import { Router } from "express";
import { controladorEstilos } from "../controllers/controladorEstilos.js";

const rootEstilos = Router()

rootEstilos.get('/:peticionEstilos', controladorEstilos)

export default rootEstilos