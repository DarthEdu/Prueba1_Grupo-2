import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import exp from 'constants';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const api={
    async pagina(){
        const prueba=(path.join(__dirname, '..' ,'..','public', 'pantalla_clima.html'))
        return prueba
    },
    async paginaInicio(){
        const inicio =(path.join(__dirname, '..' ,'..','public', 'inicio.html'))
        return inicio
    },
    async paginaFACE(){
        const faceIO = (path.join(__dirname, '..', '..', 'public','index.html'))
        return faceIO
    },
    async paginaTLE(){
        const TLEapi = (path.join(__dirname, '..', '..', 'public','PaginaSatelite.html'))
        return TLEapi
    }
}
export default api