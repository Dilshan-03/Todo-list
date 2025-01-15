function Button1(){

    const handler=(e) => {
        e.target.textContent ="THIS IS COOL"
    }
    return(
        <button onClick={(e)=>handler(e)}>Click me</button>
    )
}
export default Button1