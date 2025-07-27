function Username(props){
    //Method-1
    // if(props.IsLogged){
    //    return <h1>Welcome..! {props.name}</h1>
    // }
    // else{
    //     return <h2> Please log in to continue...!!</h2>
    // }

    //Method-2
    // return(props.IsLogged ? <h1>Welcome Yoo..! {props.name}</h1> : 
    //                         <h2> Please log in to continue...!!</h2>
    //  )

    //Methos-3
    const crt = <h1>Welcome Yoo..! {props.name}</h1>;
    const wrt = <h2> Please log in to continue...!!</h2>;
    return(props.IsLogged ?  crt : wrt
                             
  )
}
export default Username