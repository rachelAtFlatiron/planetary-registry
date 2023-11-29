import React from "react"
import Planet from "./Planet"

function PlanetList({ planets }) {


    const renderPlanets = planets.map(curPlanet => <Planet planet={curPlanet} key={curPlanet.id}/>)
    //[<planet tootine />, <planet alderaan />, <planet yavinIV />, ...]

    

    return(
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                    <th>Population</th>
                </tr>
                {renderPlanets}
            </tbody>
        </table>
    );
}

export default PlanetList;