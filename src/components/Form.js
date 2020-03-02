import React, { useState } from 'react'

const Form = () => {


    //The state that will keep user selection
    const [ search, saveSearch ] = useState({
        country: '',
        city: ''
    });

    const [ error, setError ] = useState(false);
    // //extracting the values from the state
    const { country, city } = search;

    //Function that will executed when the user make his selections

    const handleChange = e => {
        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();

        //Check if the fields are empty
        if ( country.trim() === '' || city.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        //Send the info to the app component

    }

    return (
        <form
            onSubmit={handleSubmit}
        >

        { error ? <p className='red darken-4 error custom-error'>All the fields are required</p> : null}
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
            <div className='input-field col s10'>
                <input 
                    type='submit'
                    className='waves-effect waves-light btn yellow accent-4'
                    value='Get Weather!'
                />
            </div>
        </form>
    )
}

export default Form;
