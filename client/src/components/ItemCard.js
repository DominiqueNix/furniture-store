import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export const ItemCard = ({ item, setItemAddedToCart }) => {
  const navigate = useNavigate();

  const addCartItemToStorage = () => {
    let existsingItems = JSON.parse(localStorage.getItem("items"));
    if (existsingItems === null) {
      existsingItems = [];
    }

    existsingItems.push(item);
    localStorage.setItem("items", JSON.stringify(existsingItems));
    setItemAddedToCart((bool) => !bool);
  };

  return (
    <Card sx={{ width: 300 }}>
      <CardMedia sx={{ height: 300 }} image={item.imgRef} title={item.name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(`/items/${item.id}`)}>
          Learn More
        </Button>
        <Button size="small" onClick={addCartItemToStorage}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
