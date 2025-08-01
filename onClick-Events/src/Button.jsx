function Button(){
    let count = 0;
 const handleclick = (name) => {
    if (count < 3){
        count++;
        console.log(`${name} You clicked ${count} time/s`);
    }
    else{
        console.log(`${name} stop clicking me...!!`)
    }
 }
 
 return (<button onClick={()=>handleclick("Priya")}>Click Me 😊</button>)
}
export default Button;