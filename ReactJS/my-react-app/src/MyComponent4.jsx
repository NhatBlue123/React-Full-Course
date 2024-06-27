import {useState} from "react"



 function MyComponent4()
 {
    const [cars,setCars] = useState([]);
    const [carYear,setCarYear] = useState(new Date().getFullYear());
    const [carMake,setCarMake] = useState("");
    const [carModel,setCarModel] = useState("");
    
    function handleAddCar()
    {
        const newCar = {year: carYear,make:carMake,model:carModel};

        setCars(c => [...c,newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }   

    function handelRemoveCar(index)
    {
        setCars( cars.filter((_,i)=>{
           return i !== index;
        })
      )
    }

    function handleYearChange(event)
    {
       setCarYear(event.target.value);
    }

    function handleMakeChange(event)
    {
       setCarMake(event.target.value);
    }

    function handleModelChange(event)
    {
       setCarModel(event.target.value);
    }

    return(
      <>
         <h1>Car Management</h1>
         <div>
            <h4>List of car object</h4>
            <ul>
              {
               cars.map((c,i)=>{
                 return <li className="lFood" onClick={() => handelRemoveCar(i)} key={i}>{c.year} {c.make} {c.model}</li>
               })
              }
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange}/><br /><br />
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make"/> <br /><br />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model"/> <br /><br />
            <button onClick={handleAddCar}>Add car</button>
         </div>
      </>
    )
 }

 export default MyComponent4;