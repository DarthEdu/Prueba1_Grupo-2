import express from 'express';
import {route} from '../src/routers/router.js';
import {enrutador} from './routers/routerImagenes.js';
import { enrutadorParticipantes } from './routers/routerImagenes.js';
import rootEstilos from './routers/routerEstilos.js';
import { controladorInicio } from './controllers/controladorPrivada.js';
import { controladorFACE } from './controllers/controladorPrivada.js';
import {route2} from '../src/routers/router.js';
const app = express()
app.set('port', process.env.port || 3000)
app.get('/', (req, res)=>{
    res.send('Servidor levantado')
})
app.get('/menu', controladorInicio)
app.use('/api', route)
app.use('/api', route2)
app.use('/imagen', enrutador)
app.use('/imagenes', enrutadorParticipantes)
app.use('/estilos', rootEstilos)
app.use('/login', controladorFACE)
//Exportar la variable app

  app.get("/api/tle/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const response = await fetch(`https://tle.ivanstanojevic.me/api/tle/${id}`);
      const data = await response.json();
      //console.log(data)
      res.json(data);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Error al obtener los datos");
    }
  });
  
  app.get("/api/tle/:id/propagate", async (req, res) => {
    const { id } = req.params;
    const { date } = req.query;
    try {
      const response = await fetch(
        `https://tle.ivanstanojevic.me/api/tle/${id}/propagate?date=${date}`
      );
      const data = await response.json();
      //console.log(data);
      res.json(data);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Error al obtener los datos");
    }
  });
export default app