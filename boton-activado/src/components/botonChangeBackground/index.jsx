import { PrimaryButton } from "../primaryButton"

export const BackGroundChange =({children})=>{

    const changeBackGround =()=>{
        let root = document.getElementById("root")
        let colorRandom = `rgb(${Math.random()*255}, ${Math.random()*255},${Math.random()*255})`

        root.style.backgroundColor = colorRandom
    }

    return (
        <>
            <PrimaryButton action={changeBackGround} title={"Cambiar fondo"} fill/>
            {children}
        </>
    )
}