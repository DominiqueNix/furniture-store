import { FilterPanel } from "./FilterPannel";
import { ItemCard } from "./ItemCard";
import Nav from "./Nav";

export const AllItems = ({
  items,
  filteredItems,
  setFilteredItems,
  setItemAddedToCart,
  itemAddedToCart,
}) => {
  if (filteredItems) {
    return (
      <main>
        <Nav itemAddedToCart={itemAddedToCart} />
        <div>
          <FilterPanel
            filteredItems={filteredItems}
            setFilteredItems={setFilteredItems}
            items={items}
          />
          <div className="all-items-container">
            {filteredItems.map((item, idx) => (
              <ItemCard
                key={idx}
                item={item}
                setItemAddedToCart={setItemAddedToCart}
              />
            ))}
          </div>
        </div>
      </main>
    );
  }
};
