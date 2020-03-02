import React, { useState } from 'react'

const Form = () => {


    //The state that will keep user selection
    const [ search, saveSearch ] = useState({
        country: '',
        city: ''
    })
    // //extracting the values from the state
    const { country, city } = search;

    //Function that will executed when the user make his selections

    const handleChange = e => {
        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    return (
        <form>
            <div className='input-field col s10'>
                <select
                    name='country'
                    id='country'
                    value={country}
                    onChange={handleChange}
                >
                    <option value='' disabled selected>Choose the Country</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor='country'>Country</label>

            </div>  
            <div className='input-field col s10'>
                <input 
                    className='validate' 
                    type='text' 
                    id='city' 
                    name='city'
                    onChange={handleChange}/>
                <label htmlFor='city' value={city}>City Name</label>
            </div>    
        </form>
    )
}

export default Form;
