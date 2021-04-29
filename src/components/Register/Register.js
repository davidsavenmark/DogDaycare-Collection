import "./Register.css";
import JSONDATA from "../data/dogs.json"
import { Link } from "react-router-dom";
function Register() {
    return (
        <div className="register-container">
            {JSONDATA.map((val, key) => {
                let present = "No"
                if (val.present) {
                    present = "Yes"
                }
                return <div class="cardcontainer">
                    <div class="card">
                        <img class="cardimg" src={val.img}></img>

                        <div class="content">
                            <p>Name: {val.name}</p>
                            <p>Breed: {val.breed}</p>
                            <p>Age: {val.age}</p>
                            <p>Sex: {val.sex}</p>
                            <p>Present: {present}</p>
                            <p>Chipnumber: {val.chipNumber}</p>
                            <Link to={"/dog/" + val.chipNumber} key={key}><p>Read More</p></Link>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Register;