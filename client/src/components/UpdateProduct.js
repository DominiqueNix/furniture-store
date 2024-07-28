import { height } from "@mui/system";
import {  useEffect, useState } from "react";
import "./addProductModal.css";
import { ProductModal } from "./ProductModal";

export const UpdateProduct = ({open, setOpen, setSuccessAlert, setErrorAlert, item }) => {
    console.log(item)
    console.log(open)

  const [dimensions, setDimensions] = useState({
    height: null,
    width: null,
    depth: null,
  });

  
  const getDimensions = () => {
    const regex = /(\d+)/g;

    const matches  = item.col8.match(regex)
    
    setDimensions({
        height: Number(matches[2]), 
        width: Number(matches[0]), 
        depth: Number(matches[1])
  })

  }
  const [image, setImage] = useState("");
  const [imageUploaded, setImageUploaded] = useState(false);

  const defaultNewItem = {
    name: item.col2,
    description: item.col3,
    type: item.col4,
    subType: item.col5,
    price: item.col6,
    imgRef: item.col7,
    dimensions: item.col8,
    color: item.col9,
    style: item.col10,
    room: item.col11,
    material: item.col12,
    stock: item.col13,
    hasStorage: item.col16,
    numOfDrawers: item.col14,
    size: item.col15,
    numberInSet: item.col17,
    discountPrice: item.col19,
  };

  const [newItem, setNewItem] = useState({ defaultNewItem });

  useEffect(() => {
    if(imageUploaded){
    fetch(`http://localhost:8080/products/${item.col1}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    }).then((res) => {
      if (res.status === 200) {
        setSuccessAlert(true);
        setTimeout(() => {
          setSuccessAlert(false);
        }, 1000);
      } else {
        setErrorAlert(true);
        setTimeout(() => {
          setErrorAlert(false);
        }, 1000);
      }
    });

    setDimensions({
      height: null,
      width: null,
      depth: null,
    });

    setNewItem(defaultNewItem);
    }

    setOpen(false);
    setImageUploaded(false);
    
  }, [imageUploaded])

  const onSubmit = async (e) => {
        getDimensions()
    if(image !== ""){
     const imageFormData = new FormData();
    imageFormData.append("file", image);
    imageFormData.append("upload_preset", "lqfaqr64");

    const imgRes = await fetch(
      "https://api.cloudinary.com/v1_1/ds8hwvtsv/upload",
      {
        method: "POST",
        body: imageFormData,
      }
    );

    const imageData = await imgRes.json();
    await new Promise(resolve => {
         setNewItem({
      ...newItem,
      imgRef: imageData.url,
      [dimensions]: `${dimensions.width}"W x ${dimensions.height}"H x ${dimensions.depth}"D`,
    });
    // if(dimensions.height &&)
    resolve();
    }).then(() => {
        console.log("uploaded")
        console.log(imageUploaded)
      setImageUploaded(true);  
      console.log(imageUploaded)

  }).catch(err => console.log(err))
} else {
    setImageUploaded(true)
}
};

return(
    <main>
        <ProductModal modalDefaultValues={newItem} open={open} setOpen={setOpen} onSubmit={onSubmit} image={image} setImage={setImage} newItem={newItem} setNewItem={setNewItem} dimensions={dimensions} setDimensions={setDimensions} title={"UPDATE PRODUCT"}/>
    </main>
)
};