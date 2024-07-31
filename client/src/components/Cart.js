import { Box, Button, Card, CardContent, CardMedia, IconButton, Paper, Typography } from "@mui/material";
import {
    Unstable_NumberInput as BaseNumberInput,
    numberInputClasses,
  } from '@mui/base/Unstable_NumberInput';
import { useEffect, useState } from "react"
import './cart.css';
import QuantityInput from "./MUINumberStepper";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';

export const Cart = ({setCartItemTotal, cartItemTotal}) => {

    const [cartItems, setCartItems] = useState([]);
    const [itemDeleted, setItemDeleted] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        let items = JSON.parse(localStorage.getItem("items"))
        if(items !== null){
             let cartItemsData = [];

            let seenItem = {}
            for(let i = 0; i < items.length; i++){
                let item = items[i]
                if(seenItem[item.id]){

                    seenItem[item.id].quantity = seenItem[item.id].quantity + 1;
                    seenItem[item.id].total = seenItem[item.id].price * seenItem[item.id].quantity;
                    
                } else {
                    seenItem[item.id] = {
                        id: item.id,
                        img: item.imgRef,
                        name: item.name,
                        price: item.price,
                        quantity: 1, 
                        total: item.price
                    } 
                }
            }
            for(let item in seenItem){
                cartItemsData.push(seenItem[item]);
            }
            setCartItems(cartItemsData)
        }
        setItemDeleted(false)
       
    }, [itemDeleted])

    const handleDeleteItem = (itemId) => {
        let items = JSON.parse(localStorage.getItem("items"))
        let results = items.filter(item => item.id !== itemId)
        localStorage.setItem("items", JSON.stringify(results))
        setItemDeleted(true)
        setCartItemTotal((total) => total-1)
    }

    const handleQuantityChange = (e, newValue, itemId) => {

        setCartItems((prev) => {
           return prev.map(item => (
                item.id === itemId ? {...item, quantity: newValue, total: item.price * newValue}: item
           ))
        })
    }
    if(cartItems.length){
        return(
            <main>
                <Nav cartItemTotal={cartItemTotal}/>
            <div className="cart-page-container">
                <div className="cart-items">
                  {cartItems.map(item => (
                    <Card sx={{ display: 'flex', height: '175px', width: '750px'}} key={item.id}>
                        <CardMedia 
                        component="img"
                        sx={{ width: 200 }}
                        image={item.img}
                        alt={item.name}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{width: '150px'}}>
                                <Typography variant="h6">{item.name}</Typography>
                                <Typography variant="h5">$ {item.price.toFixed(2)}</Typography>
                            </CardContent>
                        </Box>
                        <Box>
                            <CardContent>
                                <Typography sx={{textAlign: 'center'}}>Quantity</Typography>
                                <QuantityInput aria-label="Quantity Input" min={1} max={99} defaultQuantity={item.quantity} changeQuantity={handleQuantityChange} itemId={item.id}/>
                            </CardContent>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                            <CardContent>
                                <Typography sx={{textAlign: 'center'}}>Total</Typography>
                                <Typography variant="h6">$ {item.total.toFixed(2)}</Typography>
                            </CardContent>
                            <Button 
                                sx={{marginBottom: "10px"}}
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
            </div>
            </main>
        )
    } else {
        return (
            <main>
                <Nav />
                <div className="no-items-in-cart">
                    <Paper elevation={3} sx={{height: '200px', width: "500px", display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px'}}>
                        <Typography variant="h5">You don't have any cart items yet!</Typography>
                        <Button variant="contained" onClick={() => navigate('/items')}>Start Shopping</Button>
                    </Paper>
                </div>   
            </main>
           
        )
    }
    

}