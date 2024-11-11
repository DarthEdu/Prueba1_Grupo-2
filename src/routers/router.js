import { Router } from "express";
import { ControladorPagina } from "../controllers/controladorPrivada.js";
const route = Router()
route.get('/datos-metereologicos', ControladorPagina)
export default route