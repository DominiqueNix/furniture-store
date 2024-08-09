import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import QuantityInput from "./MUINumberStepper";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

export const Cart = ({
  setItemAddedToCart,
  itemAddedToCart,
  totalPayment,
  setTotalPayment,
}) => {
  const [cartItems, setCartItems] = useState([]);
  const [itemDeleted, setItemDeleted] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("items"));
    let total = 0;
    if (items !== null) {
      let cartItemsData = [];

      let seenItem = {};
      for (let i = 0; i < items.length; i++) {
        let item = items[i];
        total += item.price;
        if (seenItem[item.id]) {
          seenItem[item.id].quantity = seenItem[item.id].quantity + 1;
          seenItem[item.id].total =
            seenItem[item.id].price * seenItem[item.id].quantity;
        } else {
          seenItem[item.id] = {
            id: item.id,
            img: item.imgRef,
            name: item.name,
            price: item.price,
            quantity: 1,
            total: item.price,
          };
        }
      }
      for (let item in seenItem) {
        cartItemsData.push(seenItem[item]);
      }
      setCartItems(cartItemsData);
      setTotalPayment(total);
    }
    setItemDeleted(false);
  }, [itemDeleted, itemAddedToCart]);

  const handleDeleteItem = (itemId) => {
    let items = JSON.parse(localStorage.getItem("items"));
    let results = items.filter((item) => item.id !== itemId);
    localStorage.setItem("items", JSON.stringify(results));
    setItemDeleted(true);
  };
  const handleQuantityChange = (newValue, item, currValue) => {
    let existsingItems = JSON.parse(localStorage.getItem("items"));
    if (existsingItems === null) {
      existsingItems = [];
    }
    if (newValue > currValue) {
      existsingItems.push(item);
      localStorage.setItem("items", JSON.stringify(existsingItems));
      setItemAddedToCart((bool) => !bool);
    } else {
      for (let i = existsingItems.length - 1; i >= 0; i--) {
        if (existsingItems[i].id === item.id) {
          existsingItems.splice(i, 1);
          localStorage.setItem("items", JSON.stringify(existsingItems));
          break;
        }
      }
      setItemAddedToCart((bool) => !bool);
    }
  };

  if (cartItems.length) {
    return (
      <main>
        <Nav itemAddedToCart={itemAddedToCart} itemDeleted={itemDeleted} />
        <div className="cart-page-container">
          <div className="cart-items">
            {cartItems.map((item) => (
              <Card
                sx={{ display: "flex", height: "175px", width: "750px" }}
                key={item.id}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 200 }}
                  image={item.img}
                  alt={item.name}
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ width: "150px" }}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="h5">
                      $ {item.price.toFixed(2)}
                    </Typography>
                  </CardContent>
                </Box>
                <Box>
                  <CardContent>
                    <Typography sx={{ textAlign: "center" }}>
                      Quantity
                    </Typography>
                    <QuantityInput
                      aria-label="Quantity Input"
                      min={1}
                      max={99}
                      defaultQuantity={item.quantity}
                      changeQuantity={(e, newValue) =>
                        handleQuantityChange(newValue, item, item.quantity)
                      }
                      itemId={item.id}
                    />
                  </CardContent>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <CardContent>
                    <Typography sx={{ textAlign: "center" }}>Total</Typography>
                    <Typography variant="h6">
                      $ {item.total.toFixed(2)}
                    </Typography>
                  </CardContent>
                  <Button
                    sx={{ marginBottom: "10px" }}
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    Delete Item
                  </Button>
                </Box>
              </Card>
            ))}
          </div>
          <div className="payment-container">
            <Card sx={{ height: "75%", width: "100%" }} elevation={6}>
              <CardContent>
                <Alert severity="warning" sx={{ marginBottom: "20px" }}>
                  <AlertTitle>Please Read</AlertTitle>
                  Do not use real credit card information. This checkout was
                  made for demo purposes only.
                </Alert>
                <Typography sx={{ marginBottom: "20px" }} variant="h4">
                  Payment Total: ${totalPayment.toFixed(2)}
                </Typography>
                <Typography sx={{ marginBottom: "15px" }} variant="h5">
                  Pay with card
                </Typography>
                <Typography>Card Information</Typography>
                <TextField
                  placeholder="1234 1234 1234 1234"
                  fullWidth
                />
                <Box sx={{ display: "flex", marginBottom: "20px" }}>
                  <TextField
                    placeholder="MM/YY"
                    fullWidth
                  />
                  <TextField fullWidth placeholder="CVC" />
                </Box>
                <Typography>Cardholder Name</Typography>
                <TextField
                  sx={{ marginBottom: "20px" }}
                  fullWidth
                  placeholder="Firstname Lastname"
                />

                <Typography>Zipcode</Typography>
                <TextField
                  sx={{ marginBottom: "20px" }}
                  fullWidth
                  placeholder="12345"
                />

                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => navigate("/checkout-success")}
                >
                  Pay
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <Nav />
        <div className="no-items-in-cart">
          <Paper
            elevation={3}
            sx={{
              height: "200px",
              width: "500px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <Typography variant="h5">
              You don't have any cart items yet!
            </Typography>
            <Button variant="contained" onClick={() => navigate("/items")}>
              Start Shopping
            </Button>
          </Paper>
        </div>
      </main>
    );
  }
};
