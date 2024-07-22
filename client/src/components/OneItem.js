import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { width } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";

export const OneItem = () => {
    const [item, setItem] = useState([]);
    const id = useParams();
    console.log(id)

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
    return (
        <main >
            <Nav />
            <div className="one-item-container">
                <div className="one-item-left-container">
                    <img className="one-item-image" src={item.imgRef}/>
                </div>
                <div className="one-item-right-container">
                    <Typography variant="h3" gutterBottom>{item.name}</Typography>
                    <div>
                      <Typography variant="subtitle1" gutterBottom>{item.type}
                       {item.subType &&  `  |  ${item.subType}`} </Typography>
                    </div>
                    <Typography variant="h5">$ {item.price}</Typography>
                    <Button variant="contained" sx={{width: '75%', marginTop: "20px"}}>Add to Cart</Button>
                </div>    
            </div>
            
        </main>
    )
}