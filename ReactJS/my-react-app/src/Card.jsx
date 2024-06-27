import balePic from './assets/bale.jpg'
function Card()
{
    return(
     <div className="card">
        <img src={balePic} alt="bale" />
        <h2>Nhat Blue</h2>
        <p>I am web and android developer</p>
     </div>
    );
}
export default Card