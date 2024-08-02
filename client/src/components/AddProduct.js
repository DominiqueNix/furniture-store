import { useEffect, useState } from "react";
import "./addProductModal.css";
import { ProductModal } from "./ProductModal";
import apiURL from "../utils/api";

export const AddProduct = ({
  open,
  setOpen,
  setSuccessAlert,
  setErrorAlert,
}) => {
  const [dimensionsObj, setDimensionsObj] = useState({
    height: undefined,
    width: undefined,
    depth: undefined,
  });

  const [image, setImage] = useState("");
  const [imageUploaded, setImageUploaded] = useState(false);

  const defaultNewItem = {
    name: undefined,
    description: undefined,
    type: undefined,
    subType: undefined,
    price: undefined,
    imgRef: undefined,
    dimensions: undefined,
    color: undefined,
    style: undefined,
    room: undefined,
    material: undefined,
    stock: 0,
    hasStorage: false,
    numOfDrawers: 0,
    size: undefined,
    numberInSet: 0,
    discountPrice: 0,
  };

  const [newItem, setNewItem] = useState({ defaultNewItem });

  useEffect(() => {
    if (imageUploaded) {
      console.log("starting fetch");
      fetch(`${apiURL}/products`, {
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

      setDimensionsObj({
        height: undefined,
        width: undefined,
        depth: undefined,
      });

      setNewItem(defaultNewItem);
    }
    setImage("");
    setOpen(false);
    setImageUploaded(false);
  }, [imageUploaded]);

  const onSubmit = async (e) => {
    if (image !== "") {
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

      await new Promise((resolve) => {
        setNewItem({
          ...newItem,
          imgRef: imageData.url,
          dimensions: `${dimensionsObj.width}"W x ${dimensionsObj.height}"H x ${dimensionsObj.depth}"D`,
        });
        resolve();
      })
        .then(() => {
          setImageUploaded(true);
        })
        .catch((err) => console.log(err));
    } else {
      setNewItem({
        ...newItem,
        dimensions: `${dimensionsObj.width}"W x ${dimensionsObj.height}"H x ${dimensionsObj.depth}"D`,
      });
      setImageUploaded(true);
    }
  };

  return (
    <main>
      <ProductModal
        open={open}
        setOpen={setOpen}
        onSubmit={onSubmit}
        image={image}
        setImage={setImage}
        newItem={newItem}
        setNewItem={setNewItem}
        dimensions={dimensionsObj}
        setDimensions={setDimensionsObj}
        title={"ADD NEW PRODUCT"}
      />
    </main>
  );
};
