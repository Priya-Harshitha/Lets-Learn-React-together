import pic from './assets/dora.jpeg'


function Card(){
  return (
    
      <div className="card">
    <img className="img" src={pic} alt="image"></img>
    <h1 className="name">Dora</h1>
    <p id="desc">Dora is a traveler. She travels with her monkey friend.</p>
    </div>
  )
}
export default Card