import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import exp from 'constants';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const api={
    async privada(){
        const nuevaApi = await fetch('https://api.openweathermap.org/data/2.5/weather?q=quito&appid=0ee0cbce1fa704d2b15d0d63e9b219e6')
        const response1= await nuevaApi.json()
        return response1
    },
    async pagina(){
        const prueba=(path.join(__dirname, '..' ,'..','public', 'pantalla_clima.html'))
        return prueba
    },
    async paginaInicio(){
        const inicio =(path.join(__dirname, '..' ,'..','public', 'inicio.html'))
        return inicio
    }
}
export default api