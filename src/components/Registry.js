import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry() {
    const url = "http://localhost:8085/planets"

    //planets will hold array of data for all planets 
    //bad practice to pass down setPlanets
    const [planets, setPlanets] = useState([])
    const [search, setSearch] = useState('')

    
    //we want loadData to RUN ONLY ONCE 
    //when component first mounts (the very first render)
    useEffect(() => {
      loadData()
    }, [])
  
    const loadData = () => {
      fetch(url)
      .then(res => res.json())
      .then(data => setPlanets(data))
    }
    
    const updateSearch = (e) => {
        setSearch(e.target.value)
    }

    const addPlanet = (newPlanet) => {
        setPlanets([...planets, newPlanet])
    }

    const filteredPlanets = planets.filter(curPlanet => {
        //if currentPlanet contains substring of search 
        let curPlanetName = curPlanet.name.toUpperCase() //convert name's value to all uppercase 
        let searchSubstring = search.toUpperCase() //convert search to all uppercase
        if(curPlanetName.includes(searchSubstring)){ //check if search substring exists in planet name
            return true 
        } else {
            return false 
        }
    })
  
    return(
        <div className="registry">
            <Search updateSearch={updateSearch} search={search} />
            <div className="content">
                <PlanetList planets={filteredPlanets} search={search}/>
                <NewPlanetForm url={url} addPlanet={addPlanet} />
            </div>
        </div>
    )
}

export default Registry;