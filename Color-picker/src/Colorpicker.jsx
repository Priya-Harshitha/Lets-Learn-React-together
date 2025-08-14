import { useState } from "react"
function Colorpicker(){
    const [color,setColor] = useState('ffffff');
    const handleColor = (e)=>{setColor (e.target.value)}
    return (<div className="color-display">
        <h1>Color-Picker</h1>
        <div className="display" style={{backgroundColor:color}}>
            <p>Selected color: {color}</p>
        </div>
            <label>Select a Color: </label>
            <input type="color" value = {color} onChange={handleColor}></input>
        
    </div>)
}
export default Colorpicker;