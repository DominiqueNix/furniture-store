import { fakeData } from '../fakeData/fakeItems';
import { FilterPanel } from './FilterPannel';
import ItemCard from './ItemCard';
import Nav from './Nav';

export const AllItems = ({items}) => {

    if(items) {
    return (
        <main>     
            <Nav />
            <div className='main-products-container'>
                <FilterPanel />
                <div className='all-items-container'>
                    {items.map((item) => (<ItemCard item={item}/>))}
                </div>
            </div>
        </main>
    )
}
   
}