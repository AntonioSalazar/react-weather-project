import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Form = ({search, saveSearch, setRequest}) => {



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
        setRequest(true);

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
                    <option value="US">United States</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">Spain</option>
                    <option value="PE">Peru</option>
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

Form.propTypes = {
    search : PropTypes.object.isRequired,
    saveSearch: PropTypes.func.isRequired,
    setRequest: PropTypes.func.isRequired
}

export default Form;
