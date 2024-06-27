import { useEffect, useState } from "react"
function MyComponent()
{ 
    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);
    
    useEffect(()=>{
        window.addEventListener("resize",handleChangeSize);
        console.log("EVENT ADDED")
    },[])


    function handleChangeSize()
    {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }
    
    return(<>
        <p>Width: {width}</p>
        <p>Height: {height}</p>
    </>)
}

export default MyComponent