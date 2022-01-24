const Card = ({ component, componentProps, isRevealed, toggleRevealed }) => {
    const Component = component;

    if (isRevealed()) {
        return (
            <div className="card revealed-image card-text" onClick={() => toggleRevealed()}>
                <Component {...componentProps} />
            </div>
        );
    }
    else {
        return (
            <div className="card" onClick={() => { 
                toggleRevealed(); 
            }}>
                ?
            </div>
        );
    }
    
}

export default Card;