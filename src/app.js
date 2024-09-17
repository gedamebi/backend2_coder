import express from 'express';
import { AppInit } from './init/initialConfig.js';

const app = express()

AppInit(app);

app.listen(process.env.PORT, () => {
  console.log('Servidor escuchando en puerto ' + process.env.PORT)
});

