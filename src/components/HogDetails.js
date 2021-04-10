import React from "react";

function HogDetails({ specialty, greased, weight, medal, isShow}) {
    
    return (
        <div className="description" style={{ display: isShow ? "block" : "none"}}>
        <p><strong>Specialty:</strong> {specialty}</p>
        <p><strong>Greased:</strong> {greased ? "TRUE" : "FALSE"}</p>
        <p><strong>Weight:</strong> {weight}</p>
        <p><strong>Medal: </strong>{medal}</p>
        </div>
    )
}

export default HogDetails;