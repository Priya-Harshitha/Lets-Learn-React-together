import React, {useState} from 'react';

function ArrayChange(){
  const [foods,setFoods] = useState(["Apple","Banana", "Sapota"]);

  function handleAdd(){
    const Item = document.getElementById("item").value;
    document.getElementById("item").value ="";
    setFoods([...foods,Item]);
  }

  function handleRemove(index){
    setFoods(foods.filter((_,i)=>i!==index));
  }
    return(
      <div>
        <h1>List of foods</h1>
        <ul>
        {foods.map((food,index)=>
        <li key={index} onClick={()=>handleRemove(index)}>{food}</li>)}
        </ul>
        <input type='text' id="item"/>
        <button onClick={handleAdd}>Add Food</button>
      </div>
    )
}
export default ArrayChange;