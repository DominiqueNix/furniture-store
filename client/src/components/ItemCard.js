import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import one from '../assets/1.png'
import { Navigate, useNavigate } from 'react-router-dom';

export default function ItemCard(item) {

  const navigate = useNavigate();

  return (
    <Card sx={{ width: 300 }}>
      <CardMedia
        sx={{ height: 300}}
        image={item.item.imgRef}
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
        <Button size="small" onClick={() => navigate(`/items/${item.item.id}`)}>Learn More</Button>
        <Button size="small">Add to cart</Button>
      </CardActions>
    </Card>
  );
}