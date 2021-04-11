import React, { useState } from "react";
import HogItem from "./HogItem";
import hogs from "../porkers_data";
import Filter from "./Filter";

const HogList = () => {
    const [isShow, setIsShow] = useState(false)
    const [sortHogs, setSortHogs] = useState("All")
    const [checkBox, setCheckBox] = useState(false)

    const handleSortHogs = (e) => {
        setSortHogs(e.target.value)
      }
    const handleCheckBox = () => {
        setCheckBox(prev => !prev)
      }

    const filterHogs = () => {
        if (checkBox){
          return [...hogs].filter(hog => hog.greased )
        }else {
          return [...hogs]
        }
      }

    const hogsFilter = () => {
        const hogsArray = filterHogs()

        if (sortHogs === "Weight") {
            return hogsArray.sort((a,b) => b.weight - a.weight )
        } else if (sortHogs === "Name"){
            return hogsArray.sort((a,b) => a.name.localeCompare(b.name) )
        } else {
            return hogsArray;
        }
    }
    
    const hogItems = hogsFilter().map((hog)=> {
        return(
            <HogItem 
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
    const handleClick = () => {
        setIsShow((isShow) => !isShow)
    }
        return(
        <>
            <button className="show-btn" onClick={handleClick}>{isShow ? "Hide" : "Show"} Hogs</button>
            <Filter 
            handleCheckBox={handleCheckBox}
            checkBox={checkBox}
            handleSortHogs={handleSortHogs}
            sortHogs={sortHogs}
            />
            <div className="ui grid container" style={{ display: isShow ? "block" : "none" }}>
                {hogItems}
            </div>
        </>
        )
}

export default HogList;