import React, {useState} from "react";
import HogDetails from "./HogDetails";

function HogCard ({name, image, specialty, greased, weight, medal}) {
    // when the user click on the hog tile
    // Add Click event to hog tile
    // onClick display hog detail
 const [isShow, setIsShow] = useState(false)

 const handleClick = () => {
    //  console.log("click")
    setIsShow((isShow) => !isShow)
    console.log(isShow)
 }

    return(
    <div className="ui four wide column pigTile">
            <h3>{name}</h3>
            <img onClick={handleClick} className="minPigTile" src={image} alt={name}/>
            {/* <button onClick={handleClick}>{isShow ? "Less" : "More" } Details</button> */}
            <HogDetails
            isShow={isShow} 
            specialty={specialty}
            greased={greased}
            weight={weight}
            medal={medal}
            />
    </div>
    )
}

export default HogCard;