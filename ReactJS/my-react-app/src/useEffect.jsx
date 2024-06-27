import React,{useEffect , useState} from "react"
function MyComponent()
{
   const [count,setCount] = useState(0);
   const [color,setColor] = useState("green");
   useEffect(()=>{
    document.title = `Count ${count} ${color}`
   },[count,color])
    
   function changeColor()
   {
     setColor(c => c === "green" ? "red" : "green")
   }
   return(<>
      <p style={{color:color}}>Count:{count}</p>
      <button onClick={() => setCount(c=>c+1)}>Add</button>
      <button onClick={() => setCount(c=>c-1)}>Subtract</button>
      <button onClick={changeColor}>Change Color</button>
   </>)
}
export default MyComponent 