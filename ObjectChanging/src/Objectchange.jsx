import { useState } from "react";

function Objectchange(){
  const [car,setCar] = useState({year:2025,
    make:"Lamborghini",
    model:"special"
  });
  function handleYear(e){
    setCar(c=>({...c,year:e.target.value}));
  }
  function handleMake(e){
    setCar(c=>({...c,make:e.target.value}));
  }
  function handleModel(e){
    setCar(c=>({...c,model:e.target.value}));
  }
  return(<>
  <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
  <input type="number" value={car.year} onChange={handleYear}/><br>
  </br><br></br>
  <input type="text" value={car.make} onChange={handleMake}/><br></br><br></br>
  <input type="text" value={car.model} onChange={handleModel}/>
  </>)
}
export default Objectchange;