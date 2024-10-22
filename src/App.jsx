import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Noticias from './components/Noticias'
import './App.css'

const datos = [{
  id: 0,
  titulo: "Titulo 1",
  fecha: "19 de octubre de 2024",
  imgurl: "src/assets/sky.jpg",
  cuerpo: "",
  usuariourl: "src/assets/avatar01.png",
  altprincipal: "Cielo",
  altusuario: "Usuario1",
  numerolikes:50,
},
{
  id: 1,
  titulo: "Titulo 2",
  fecha: "19 de octubre de 2024",
  imgurl: "src/assets/sea.jpg",
  cuerpo: "",
  usuariourl: "src/assets/avatar02.png",
  altprincipal: "Mar. ",
  altusuario: "Usuario2",
  numerolikes:2,
},
{
  id: 2,
  titulo: "Titulo 3",
  fecha: "19 de octubre de 2024",
  imgurl: "src/assets/tux.jpg",
  cuerpo: "",
  usuariourl: "src/assets/avatar03.png",
  altprincipal: "tux",
  altusuario: "Usuario3",
  numerolikes:348,
},
{
  id: 3,
  titulo: "Titulo 4",
  fecha: "19 de octubre de 2024",
  imgurl: "src/assets/mario.jpg",
  cuerpo: "",
  usuariourl: "src/assets/avatar04.png",
  altprincipal: "Pescador bebiendo una botella de agua mirando al mar",
  altusuario: "Usuario4",
  numerolikes:0,
}]

function App() {

  return (
    <List>
      {datos.map((Noticia) => (
        <ListItem key={Noticia.id}>
          <Noticias {...Noticia}/>
        </ListItem>))}
    </List>
  )
}

export default App
