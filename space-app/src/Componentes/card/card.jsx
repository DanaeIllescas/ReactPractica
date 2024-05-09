
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="soy esa"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Dini 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Me gustan los flanes con cajeta, el agua de jamaica con guayaba que sabe a fresa,
            los animales de cabellera abundante, los días calurosos, los mojitos, leer mangas pero no ver anime,
            dibujar con crayolas, hacer collage, no sé nadar pero soy de Cancún, tengo 3 calcetines sin par, perdí 100 pesos,
            mi abuelita me daba guanabana helada en vez de helado, no me gusta usar zapatos, me preocupan las elecciones presidenciales,
            hoy rompí un plato y me puse a llorar.  
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Don't Share
        </Button>
      </CardActions>
    </Card>
  );
}