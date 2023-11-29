import React, { useState } from "react"

function NewPlanetForm({url, addPlanet}) {
    const emptyForm = {
        name: '',
        climate: '',
        terrain: '',
        population: ''
    }

    const [form, setForm] = useState(emptyForm)

    //update form state based on user input
    const handleChange = (e) => {
        //use destructuring to create new object for form/key value pairs
        //so as not to overwrite state variable
        setForm({
            ...form, 
            //e.target.name and form's keys HAVE TO MATCH for this to work
            [e.target.name]: e.target.value 
        })
    }

    //onChange={handleChange}
    //onChange={() => handleChange('some random variable')}
    //onChange={(e) => handleChange(e)} === onChange={handleChange}

    const handleSubmit = (e) => {
        e.preventDefault()
        //POST
        fetch(url, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                ...form,
                population: parseInt(form.population)
            })
        })
        .then(res => res.json())
        .then(data => {
            addPlanet(data)
            setForm(emptyForm)
        })
    }

    //controlled - we need to display to view what the state holds
    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={form.name} type="text" name="name" placeholder="Name"/>
            <input onChange={handleChange} value={form.climate} type="text" name="climate" placeholder="Climate" />
            <input onChange={handleChange} value={form.terrain} type="text" name="terrain" placeholder="Terrain"/>
            <input onChange={handleChange} value={form.population} type="text" name="population" placeholder="Population" />
            <input type="submit" value="Add"/>
        </form>
    );
}

export default NewPlanetForm;