import { FilterPanel } from './FilterPannel';
import ItemCard from './ItemCard';
import Nav from './Nav';

export const AllItems = ({items, filteredItems, setFilteredItems}) => {

    if(filteredItems) {
    return (
        <main>     
            <Nav />
            <div>
                <FilterPanel filteredItems={filteredItems} setFilteredItems={setFilteredItems} items={items}/>
                <div className='all-items-container'>
                    {filteredItems.map((item, idx) => (<ItemCard key={idx} item={item}/>))}
                </div>
            </div>
        </main>
    )
}
   
}