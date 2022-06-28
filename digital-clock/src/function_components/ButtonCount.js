const ButtonCount= (props) => {
    //this a component of button count down
    return(
        <>
            <button className="Count" onClick={props.switch}>Count-down</button>
        </>
    )
}

export default ButtonCount;