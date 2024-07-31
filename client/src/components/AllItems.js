import { FilterPanel } from './FilterPannel';
import { ItemCard } from './ItemCard';
import Nav from './Nav';

export const AllItems = ({items, filteredItems, setFilteredItems, cartItemTotal, setCartItemTotal}) => {


    if(filteredItems) {
    return (
        <main>     
            <Nav cartItemTotal={cartItemTotal}/>
            <div>
                <FilterPanel filteredItems={filteredItems} setFilteredItems={setFilteredItems} items={items}/>
                <div className='all-items-container'>
                    {filteredItems.map((item, idx) => (<ItemCard key={idx} item={item} setCartItemTotal={setCartItemTotal} cartItemTotal={cartItemTotal}/>))}
                </div>
            </div>
        </main>
    )
}
   
}