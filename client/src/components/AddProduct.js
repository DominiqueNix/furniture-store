import {  useEffect, useState } from "react";
import "./addProductModal.css";
import { ProductModal } from "./ProductModal";

export const AddProduct = ({open, setOpen, setSuccessAlert, setErrorAlert }) => {
  const [dimensions, setDimensions] = useState({
    height: null,
    width: null,
    depth: null,
  });

  const [image, setImage] = useState("");
  const [imageUploaded, setImageUploaded] = useState(false);

  const defaultNewItem = {
    name: null,
    description: null,
    type: null,
    subType: null,
    price: null,
    imgRef: null,
    dimensions: null,
    color: null,
    style: null,
    room: null,
    material: null,
    stock: 0,
    hasStorage: false,
    numOfDrawers: 0,
    size: null,
    numberInSet: 0,
    discountPrice: 0,
  };

  const [newItem, setNewItem] = useState({ defaultNewItem });

  useEffect(() => {
    if(imageUploaded){
        console.log('starting fetch')
    fetch("http://localhost:8080/products", {
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
    resolve();
    }).then(() => {
        console.log("uploaded")
        console.log(imageUploaded)
      setImageUploaded(true);  
      console.log(imageUploaded)

  }).catch(err => console.log(err))
};

return(
    <main>
        <ProductModal open={open} setOpen={setOpen} onSubmit={onSubmit} image={image} setImage={setImage} newItem={newItem} setNewItem={setNewItem} dimensions={dimensions} setDimensions={setDimensions} title={"ADD NEW PRODUCT"}/>
    </main>
)
};
