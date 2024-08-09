import couch from "../assets/couch.png";
import Nav from "./Nav";
import { ItemCard } from "./ItemCard";

export const Landing = ({ popularItems, setItemAddedToCart }) => {
  return (
    <div className="landing-page">
      <Nav />
      <div className="hero-background">
        <img src={couch} className="hero-img" />
        <div className="hero-circle"></div>
        <h1 className="title">Make your house feel like home.</h1>
      </div>
      <h1 className="best-sellers-title">Best Sellers</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {popularItems.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            setItemAddedToCart={setItemAddedToCart}
          />
        ))}
      </div>
    </div>
  );
};
