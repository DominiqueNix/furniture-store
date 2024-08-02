import Button from "@mui/material/Button";
import { Chip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import { utils } from "../utils/utils";
import "./oneItem.css";
import apiURL from "../utils/api";

export const OneItem = ({ setItemAddedToCart, itemAddedToCart }) => {
  const [item, setItem] = useState([]);
  const id = useParams();

  const fetchItems = () => {
    fetch(`${apiURL}/products/${id.itemId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItem(data);
      });
  };

  useEffect(() => {
    fetchItems();
  }, []);

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
    <main>
      <Nav itemAddedToCart={itemAddedToCart} />
      <div className="one-item-container">
        <div className="one-item-left-container">
          <img className="one-item-image" src={item.imgRef} />
        </div>
        <div className="one-item-right-container">
          <Typography variant="h3">
            {item.name}
            {item.stock > 0 ? (
              <Chip
                sx={{ marginLeft: "10px" }}
                label="In Stock"
                color="success"
                variant="outlined"
              />
            ) : (
              <Chip
                sx={{ marginLeft: "10px" }}
                label="Out of Stock"
                color="error"
                variant="outlined"
              />
            )}
          </Typography>
          <div>
            <Typography variant="subtitle1">
              {item.type}
              {item.subType &&
                item.subType !== "UNSPECIFIED" &&
                `  |  ${utils.enumMappings[item.subType].toUpperCase()}`}{" "}
            </Typography>
          </div>
          <Typography
            sx={{
              margin: "20px 10px 20px 0",
              fontSize: "1.5rem",
              fontWeight: "300",
            }}
          >
            {item.description}
          </Typography>
          {item.discountPrice ? (
            <Typography variant="h5">$ {item.discountPrice}</Typography>
          ) : (
            <Typography variant="h5">$ {item.price}</Typography>
          )}

          <Typography
            sx={{
              margin: "20px 10px 10px 0",
              fontSize: "1.25rem",
              fontWeight: "300",
            }}
          >
            Details:
          </Typography>
          <Typography sx={{ fontWeight: "350" }}>
            <span className="details-title">Dimensions:</span> {item.dimensions}
          </Typography>
          <Typography sx={{ fontWeight: "350" }}>
            <span className="details-title">Primary Color:</span>{" "}
            {utils.enumMappings[item.color]}
          </Typography>
          <Typography sx={{ fontWeight: "350" }}>
            <span className="details-title">Material:</span>{" "}
            {utils.enumMappings[item.material]}
          </Typography>
          <Typography sx={{ fontWeight: "350" }}>
            <span className="details-title">Style:</span>{" "}
            {utils.enumMappings[item.style]}
          </Typography>
          {item.hasStorage && (
            <Typography sx={{ fontWeight: "350" }}>
              This item has storage
            </Typography>
          )}
          {item.size && (
            <Typography sx={{ fontWeight: "350" }}>
              <span className="details-title">Bed Size: </span>
              {item.size}
            </Typography>
          )}
          {item.numOfPieces > 0 && (
            <Typography sx={{ fontWeight: "350" }}>
              This item comes with {item.numOfPieces} pieces.
            </Typography>
          )}
          {item.numInSet > 0 && (
            <Typography sx={{ fontWeight: "350" }}>
              <span className="details-title">Number in Set:</span>{" "}
              {item.numInSet}
            </Typography>
          )}
          {item.numOfDrawers > 0 && (
            <Typography sx={{ fontWeight: "350" }}>
              <span className="details-title">Number of Drawers:</span>{" "}
              {item.numOfDrawers}
            </Typography>
          )}

          <Button
            variant="contained"
            sx={{ width: "75%", marginTop: "20px" }}
            onClick={addCartItemToStorage}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </main>
  );
};
