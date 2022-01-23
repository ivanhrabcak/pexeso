import { useState } from "react";

const Card = ({ component, componentProps, isRevealed, setRevealed, onClick }) => {
    const Component = component;

    if (isRevealed) {
        return (
            <div className="card revealed-image" onClick={onClick}>
                <Component {...componentProps} />
            </div>
        );
    }
    else {
        return (
            <div className="card" onClick={() => { 
                setRevealed(true); 
                onClick();
            } }>
                ?
            </div>
        );
    }
    
}

export default Card;