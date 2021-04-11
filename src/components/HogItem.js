import React, { useState } from "react";

const HogItem = ({ name, image, specialty, greased, weight, medal }) => {

    const [isShow, setIsShow] = useState(false)

    const handleClick = () => {
        setIsShow((isShow) => !isShow)
    }
    return(
    <div className="pigTile">
            <h3>{name}</h3>
            <img onClick={handleClick} className="minPigTile" src={image} alt={name}/>
        <div className="subtleText" style={{ display: isShow ? "block" : "none" }}>
            <p><strong>Specialty:</strong> {specialty}</p>
            <p><strong>Greased:</strong> {greased ? "YES" : "NAH"}</p>
            <p><strong>Weight:</strong> {weight}</p>
            <p><strong>Medal:</strong> {medal}</p>
        </div>
    </div>
    )
}

export default HogItem;