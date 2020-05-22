import React from 'react';


const Logo = (props) =>{
    return(
        <div className={`logo ${props.classes && props.classes}`}>
            <h1>JACK</h1>
            <img src={`/assets/icons/${props.classes && props.classes === 'white' ? 'Jack_White.svg':'Jack_Green.svg'}`} alt={`jack-logo`}/>
        </div>
    );
}


export default Logo;