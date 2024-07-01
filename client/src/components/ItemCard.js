import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import one from '../assets/1.png'

export default function ItemCard(item) {
    console.log(item.item.image)
  return (
    <Card sx={{ width: 300 }}>
      <CardMedia
        sx={{ height: 300}}
        image={one}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${item.item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        <Button size="small">Add to cart</Button>
      </CardActions>
    </Card>
  );
}