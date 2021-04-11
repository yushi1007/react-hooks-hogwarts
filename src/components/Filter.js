import React from "react";

const Filter = ({ sortHogs, handleSortHogs, handleCheckBox, checkBox }) => {
    return(
<div>
    <form>
        <input type="checkbox" checked={checkBox ? "YES" : ""} onChange={handleCheckBox} />
       
        <select name="filter" onChange={handleSortHogs} value={sortHogs}>
          <option value="All">All</option>
          <option value="Name">Name</option>
          <option value="Weight">Weight</option>
        </select>
    </form>
</div>
    )
}

export default Filter;