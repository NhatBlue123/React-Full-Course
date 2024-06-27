import {useState} from "react"

function Counter()
{
    const [number,setNumber] = useState(0);

    const increaseNumber = () =>
    {
        setNumber(n => n+1);
        setNumber(n => n+1);
        setNumber(n => n+1);
    }
    const resetNumber = () =>
    {
        setNumber(number-number);
    }
    const decreaseNumber = () =>
    {
        setNumber(n => n-1);
        setNumber(n => n-1);
        setNumber(n => n-1);
    }
    return(
        <>
        <div className="main">
            <p className="couter-display">{number}</p>
            <button className="couter-bt" onClick={increaseNumber} >Increase</button>
            <button className="couter-bt" onClick={resetNumber}>Reset</button>
            <button className="couter-bt" onClick={decreaseNumber}>Decrease</button>
        </div>
        </>
        
    );
}
export default Counter