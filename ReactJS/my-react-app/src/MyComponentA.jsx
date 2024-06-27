import React,{useState,createContext} from "react";
import MyComponentB from "./MyComponentB";

export const UserContext = createContext();
function MyComponentA()
{
    const [user,setUser] = useState("NhatBlue");
    return(
        <>
        <div>
            <input type="text" style={{width: 300,height: 50,fontSize: 40}} value={user} onChange={(event)=>{
                setUser(event.target.value);
            }} />
        </div>
         <div className="box">
             <h1>ComponentA</h1>
             <h2>Hello {user}</h2>
             <UserContext.Provider value={user}>
             <MyComponentB user={user}></MyComponentB>
             </UserContext.Provider>
         </div>
        </>
    )

}
export default MyComponentA