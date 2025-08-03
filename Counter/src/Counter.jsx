import { useState } from "react";
function Counter(){
  const [num,setNum] = useState(0);

  const dec = ()=>setNum(num-1);
  const res = ()=>setNum(0);
  const inc = ()=>setNum(num+1);

  return (
    <>
    <div className="display">
        <label id="dis">{num}</label>
        <div className="btn">
            <button onClick={dec}>Decrement</button>
            <button onClick={res}>Reset</button>
            <button onClick={inc}>Increment</button>
        </div>
    </div>
    </>
  )
}
export default Counter;