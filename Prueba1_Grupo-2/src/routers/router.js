import { Router } from "express";
import { ControladorPagina } from "../controllers/controladorPrivada.js";
import { controladorTLE } from "../controllers/controladorPrivada.js";
const route = Router()
const route2= Router()
route.get('/datos-meteorologicos', ControladorPagina)
route2.get('/TLE', controladorTLE)
export {route, route2}