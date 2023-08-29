import express from "express";
import bodyParser from "body-parser";
import { startEventListener, sendAddedFilesToProcess } from './eventListener.mjs'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get("/", (req, res) => {
  res.send("Hola bb, ya que contigo no sirve la labia");
});

app.post('/message', (req, res) => {
  sendAddedFilesToProcess('hola')
  const { user, message } = req.body
  console.log(`El mensaje de ${user} es: ${message}`);
  return res.status(200).send(`El mensaje de ${user} es: ${message}`)
})

app.post('/v2/message', (req, res) => {
  const respuesta = new FormData(req.body)
  console.log(respuesta);
  return
})

startEventListener();

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
