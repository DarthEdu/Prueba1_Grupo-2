import express from 'express';
import route from '../src/routers/router.js';
import {enrutador} from './routers/routerImagenes.js';
import { enrutadorParticipantes } from './routers/routerImagenes.js';
import rootEstilos from './routers/routerEstilos.js';
import { controladorInicio } from './controllers/controladorPrivada.js';
const app = express()
app.set('port', process.env.port || 3000)
app.get('/', (req, res)=>{
    res.send('Servidor levantado')
})
app.get('/menu', controladorInicio)
app.use('/api', route)
app.use('/imagen', enrutador)
app.use('/imagenes', enrutadorParticipantes)
app.use('/estilos', rootEstilos)
//Exportar la variable app
export default app