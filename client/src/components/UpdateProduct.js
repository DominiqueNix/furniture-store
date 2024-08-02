import { useEffect, useState } from "react";
import "./addProductModal.css";
import { ProductModal } from "./ProductModal";
import apiURL from "../utils/api";

export const UpdateProduct = ({
  open,
  setOpen,
  setSuccessAlert,
  setErrorAlert,
  item,
}) => {
  const [dimensionsObj, setDimensionsObj] = useState({
    height: undefined,
    width: undefined,
    depth: undefined,
  });

  const getDimensions = () => {
    const regex = /(\d+)/g;

    const matches = item.col8.match(regex);

    if (matches) {
      setDimensionsObj({
        height: Number(matches[2]),
        width: Number(matches[0]),
        depth: Number(matches[1]),
      });
    }
  };
  const [image, setImage] = useState("");
  const [imageUploaded, setImageUploaded] = useState(false);
  const [newItem, setNewItem] = useState({});

  useEffect(() => {
    if (imageUploaded) {
      fetch(`${apiURL}/products/${item.col1}`, {
        method: "PUT",
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

      setOpen(false);
      setImageUploaded(false);
      setImage("");
    }

    setNewItem({
      name: item.col2,
      description: item.col3,
      type: item.col4,
      subType: item.col5,
      price: Number(item.col6.replace("$", "")),
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
    });
    if (item.col8) {
      getDimensions();
    }
  }, [imageUploaded, item]);

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
        title={"UPDATE PRODUCT"}
        currItem={item}
      />
    </main>
  );
};
