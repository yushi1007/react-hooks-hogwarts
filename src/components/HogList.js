import React, { useState } from "react";
import FilterForm from "./FilterForm";
import HogCard from "./HogCard";

// HELLO WORLD
function HogList({ hogs, isShowHogs }) {
    // console.log(hogs)
    
    const[dropDown, setDropDown] = useState("All")
    const[checkBox, setCheckBox] = useState(false)

    function handleDropDown(e) {
        setDropDown(e.target.value)
    }

    function handleCheckBox() {
        setCheckBox((checkBox) => !checkBox)
    }

    function filterHogs(){
        if(checkBox){
            return [...hogs].filter( hog => hog.greased )
        }else {
            return [...hogs]
        }
    }

    const sortHogs = () => {
        const hogsArray = filterHogs()
    
        if (dropDown === "Weight"){
          return hogsArray.sort((a,b) => b.weight - a.weight )
        } else if (dropDown === "Name") {
          return hogsArray.sort((a,b) => a.name.localeCompare(b.name) )
        }else {
          return hogsArray
        }
      }

    

    const hogCard = sortHogs().map((hog) => {
        return(
            <HogCard 
            key={hog.name}
            name={hog.name}
            image={hog.image}
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog.weight}
            medal={hog["highest medal achieved"]}
            />
        )
    })

    return(
    <>        
        <div>
            <FilterForm 
            handleDropDown={handleDropDown}
            handleCheckBox={handleCheckBox}
            checkBox={checkBox}
            dropDown={dropDown}
            />
        </div>
    
        <div className="ui grid container" className={`${isShowHogs ? "active" : ""} show`}>
            {hogCard}
        </div>  
    </>
    );
}

export default HogList;