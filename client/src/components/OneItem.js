import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { width } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import { utils } from '../utils/utils';

export const OneItem = ({setCartItemTotal, cartItemTotal}) => {
    const [item, setItem] = useState([]);
    const id = useParams();

  const fetchItems = () => {
      fetch(`http://localhost:8080/products/${id.itemId}`)
        .then(res => res.json())
        .then(data =>{ 
          console.log(data)
          setItem(data)
          })
  }

  useEffect(() => {
    fetchItems()
  }, [])

  const addCartItemToStorage = () => {
    let existsingItems = JSON.parse(localStorage.getItem("items"))
    if(existsingItems === null) {
      existsingItems = []
    }

    existsingItems.push(item)
    localStorage.setItem("items", JSON.stringify(existsingItems))
    setCartItemTotal((total) => total + 1)
  }
    return (
        <main >
            <Nav cartItemTotal={cartItemTotal}/>
            <div className="one-item-container">
                <div className="one-item-left-container">
                    <img className="one-item-image" src={item.imgRef}/>
                </div>
                <div className="one-item-right-container">
                    <Typography variant="h3" gutterBottom>{item.name}</Typography>
                    <div>
                      <Typography variant="subtitle1" gutterBottom>{utils.enumMappings[item.type]}
                       {item.subType && item.subType !== "UNSPECIFIED" &&  `  |  ${utils.enumMappings[item.subType]}`} </Typography>
                    </div>
                    <Typography variant="h5">$ {item.price}</Typography>
                    <Button variant="contained" sx={{width: '75%', marginTop: "20px"}} onClick={addCartItemToStorage}>Add to Cart</Button>
                </div>    
            </div>
            
        </main>
    )
}