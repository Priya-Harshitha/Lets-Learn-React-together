import List from "./List";

function App() {

const fruits = [{id:1,name:"Apple",Calories:95},
                {id:2,name:"Orange",Calories:105},
                {id:3,name:"Banan",Calories:84},
                {id:4,name:"Custode Apple",Calories:113},
                {id:5,name:"Mango",Calories:183},
                {id:6,name:"Sappota",Calories:93},
];

// fruits.sort((a,b)=>a.name.localeCompare(b.name));  //Alphabetic
// fruits.sort((a,b)=>b.name.localeCompare(a.name));  //REVERSE Alphabetic
// fruits.sort((a,b)=>a.Calories-b.Calories); //Numeric
// fruits.sort((a,b)=>b.Calories-a.Calories); //REVERSE Numeric


 const Vegetables = [{id:1, name:"carrot",Calories:95},
                  {id:2, name:"Beetroot",Calories:82},
                  {id:3, name:"Leafy",Calories:94},
                  {id:4, name:"Capsicum",Calories:145},
                  {id:5, name:"Potato",Calories:88}];


  return (
    <>
    <List items = {fruits} Category = "Fruits"/>
    <List items = {Vegetables} Category = "Vegetables"/>
    {/* <List /> */}
    </>
  )
}

export default App
