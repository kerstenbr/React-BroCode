import profilePic from "./assets/profile.png"

function Card(){
    return(
        <div className="card">
             <img className="card-image" src={profilePic} alt="Profile picture for kerstenbr" />
             <h2 className="card-title">Kerstenbr</h2>
             <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro in odit deserunt..</p>
        </div>
    )
}

export default Card