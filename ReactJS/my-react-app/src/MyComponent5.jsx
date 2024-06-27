import React,{useEffect,useState,useRef} from "react"

function MyComponent()
{
   const inputE1 = useRef(null);
   const inputE2 = useRef(null);
   const inputE3 = useRef(null);

   useEffect(()=>{
    console.log("COMPONENT RENDERED");
   });
    
   function handelClick1()
   {
      inputE1.current.focus();
      inputE1.current.style.backgroundColor = "Yellow";
      inputE2.current.style.backgroundColor = "";
      inputE3.current.style.backgroundColor = "";

   }
   
   function handelClick2()
   {
      inputE2.current.focus();
      inputE2.current.style.backgroundColor = "Red";
      inputE1.current.style.backgroundColor = "";
      inputE3.current.style.backgroundColor = "";
   }

   function handelClick3()
   {
      inputE3.current.focus();
      inputE3.current.style.backgroundColor = "Blue";
      inputE2.current.style.backgroundColor = "";
      inputE1.current.style.backgroundColor = "";

   }
   return(
    <div>
        <button onClick={handelClick1}>Click me1!</button>
        <input type="text" ref={inputE1} />

        <button onClick={handelClick2}>Click me2!</button>
        <input type="text" ref={inputE2} />

        <button onClick={handelClick3}>Click me3!</button>
        <input type="text" ref={inputE3} />
    </div>
   )

}
export default MyComponent