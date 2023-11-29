import React, { useState } from "react"

function Search({ updateSearch, search }) {
    

    return (
        <div>
            <input type="text" onChange={updateSearch} value={search} placeholder="Search..."/>
        </div>
    );
}

export default Search;