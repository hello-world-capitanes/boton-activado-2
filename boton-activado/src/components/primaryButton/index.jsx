

export const PrimaryButton =({title, fill, action})=>{
    return(
        <button onClick={action} style={{ color: fill? "white" : "rgb(29, 155, 240)", backgroundColor: fill? "rgb(29, 155, 240)" : "white" }}>
            {title}
        </button>
    )
}