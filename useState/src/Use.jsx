import React, {useState} from "react";

function Use(){
    const [name,setName] = useState('');
    const [age,setAge] = useState(0);
    const [isStudent,setIsStudent] = useState(false);

    const handleName =()=>setName("Ammu");
    const handleAge =()=>setAge(20);
    const handletoggle =()=>setIsStudent(!isStudent);
    return (
        <>
        <h1>Lets use useState hook</h1>
        <label>Name: {name}</label><br/><br/>
        <button onClick={handleName}>Dispaly name</button>

        <br/><br/>

        <lable>Age: {age}</lable><br/><br/>
        <button onClick={handleAge}>Corrrect Age</button>

        <br/><br/>

        <lable>Is Student:{isStudent?"Yes":"No"}</lable><br/><br/>
        <button onClick={handletoggle}>Toggle Value</button>
        </>
    )
}
export default Use;