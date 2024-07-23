import couch from '../assets/couch.png';
import ItemCard from './ItemCard';
import Nav from './Nav'

export const Landing = ({items}) => {
    return(
        <div className='landing-page'>
            <Nav />
            <div className="hero-background">
                <img src={couch} className="hero-img"/>
                <div className='hero-circle'></div>
                <h1 className="title">Make your house feel like home.</h1>
            </div>
            <h1 className='best-sellers-title'>Best Sellers</h1>
            <div className='landing-items-container'>
             {items.map((item) => (<ItemCard item={item}/>))}   
            </div>
        </div>
    )
}