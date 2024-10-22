import * as React from 'react';
import { useState } from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShareIcon from '@mui/icons-material/Share'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TelegramIcon from '@mui/icons-material/Telegram'

import FavoriteIcon from '@mui/icons-material/Favorite';
import { CardHeader } from '@mui/material';


import { DialogContent, Divider } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from '@mui/material/Grid2';





const Noticias = ({ titulo, fecha, imgurl, cuerpo, usuariourl, numerolikes, altprincipal, altusuario }) => {
  const [open, setOpen] = React.useState(false);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(numerolikes);

  const handleLike = () => {
    setLiked(!liked)
    { liked ? setLikes(likes - 1) : setLikes(likes + 1) }

  }

  const handleShare = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }
  const handleWhatsapp = () => {
    setOpen(false);
    console.log("Enviando por Whatsapp...")
  }
  const handleTelegram = () => {
    setOpen(false);
    console.log("Enviando por Telegram...")

  }
  return (
    <>
      <Card sx={{ maxwidth: 1280 }}>

        <CardContent>  {/*Lo hice con grid porque si no no se quedaba en la misma linea.*/}
          <Grid container spacing={10}>
            <Grid size={3} alignContent={'center'}>
              <CardMedia /*Imagen de usuario*/
                sx={{ height: 40, width: 40 }}
                image={usuariourl}
                alt={altusuario}
              />
            </Grid>
            <Grid size={7}>

              <Typography align='center'>{titulo}</Typography>
              <Typography align='center'>{fecha}</Typography>
            </Grid>
            <Grid size={2} textAlign={'right'}>
              <IconButton><MoreVertIcon/></IconButton>  {/*Tres puntitos*/}
            </Grid>
          </Grid>

        </CardContent>


        <CardMedia
          sx={{ height: 194 }}
          image={imgurl}
          title={titulo}
          alt={altprincipal}
        />



        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {cuerpo} {/*para poder hacer la descripción personalizada si queremos */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
          </Typography>
        </CardContent>
        <CardActions>


          {/* NÚMERO DE LIKES */}
          <Typography>{likes}</Typography>

          {/* BOTÓN DE LIKE */}
          <IconButton onClick={handleLike}>
            {liked ? <FavoriteIcon color='secondary'></FavoriteIcon> : <FavoriteBorder></FavoriteBorder>}
          </IconButton>

          {/* BOTÓN DE COMPARTIR */}
          {liked ? <IconButton onClick={handleShare}><ShareIcon /> </IconButton> //If card liked {button}
            :
            <IconButton disabled><ShareIcon /> </IconButton>} {/* else{iconbutton disabled} */}

        </CardActions>
      </Card >

      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          {"COMPARTIR"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>¿A través de qué plataforma quieres compartir?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <IconButton onClick={handleWhatsapp}><WhatsAppIcon /></IconButton>

          <IconButton onClick={handleTelegram}><TelegramIcon /></IconButton>
        </DialogActions>
      </Dialog>

    </>
  )
}

export default Noticias
