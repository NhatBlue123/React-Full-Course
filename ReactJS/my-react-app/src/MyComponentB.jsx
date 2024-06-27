import MyComponentC from "./MyComponentC";

function MyComponentB()
{
    return(
        <>
         <div className="box">
             <h1>ComponentB</h1>
             <MyComponentC></MyComponentC>
         </div>
        </>
    )

}
export default MyComponentB