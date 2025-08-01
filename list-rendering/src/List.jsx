function List({items=[],Category="catogery"}){

const listItems = items.map(item => <li key={item.id}>
                                    {item.name}: &nbsp;
                                    <b>{item.Calories}</b></li>);
return (<>
   <h3>{Category}</h3>
   <ol>{listItems}</ol>
</>)
}
export default List;