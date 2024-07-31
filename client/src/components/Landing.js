import couch from '../assets/couch.png';
import Nav from './Nav'

export const Landing = ({cartItemTotal}) => {
    return(
        <div className='landing-page'>
            <Nav cartItemTotal={cartItemTotal}/>
            <div className="hero-background">
                <img src={couch} className="hero-img"/>
                <div className='hero-circle'></div>
                <h1 className="title">Make your house feel like home.</h1>
            </div>
            <h1 className='best-sellers-title'>Best Sellers</h1>
            <div>

            </div>
        </div>
    )
}