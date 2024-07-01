import couch from '../assets/couch.png';
import Nav from './Nav'

export const Landing = () => {
    return(
        <div>
            <Nav />
            <div className="hero-background">
                {/* <img src={couch} className="hero-img"/> */}
                {/* <div className='hero-circle'></div> */}
                <h1 className="title">Make your house feel like home.</h1>
            </div>
        </div>
    )
}