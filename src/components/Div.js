const Div = ({text, ...props}) => {
    return (
        <div {...props}>
            {text}
        </div>
    );
}

export default Div;