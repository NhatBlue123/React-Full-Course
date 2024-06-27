import {useState} from "react"

function MyComponent3()
{
   const [foods,setFoods] = useState(["Apple","Ogrance","Banana"]);
   

   const handleAddFood = () =>{
      const newFood = document.getElementById('foodInput').value;
      document.getElementById('foodInput').value = "";

      setFoods(f => ([...f,newFood]));
   }
   // return theo true false
   const handleRemoveFood = (index) =>{
      setFoods(foods.filter((_,i)=>{
         return i !== index;
      }))
   }

   return (
      <div>
         <h2>List of Foods</h2>
         <ul>
            {
               foods.map( (food,index) =>  <li className="lFood" onClick={() => handleRemoveFood(index)} key={index}>{food}</li>)
            }
         </ul>
        <input type="text" id="foodInput" placeholder="Enter food name: " />
        <button onClick={handleAddFood}>Add food</button>
      </div>
   )
}
export default MyComponent3;