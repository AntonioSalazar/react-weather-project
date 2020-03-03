import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({response}) => {

    //extract the info that we need from the result
    const { name, main } = response;

    if (!name) return null;

    const kelvin = 273.15;

    return ( 
            <div className='card-panel white col s12'>
                <div className='black-text'>
                    <h2>The weather in {name} is:</h2>
                    <p className='weather'>
                        { parseFloat(main.temp - kelvin , 10).toFixed(2)}<span> &#x2103; </span>
                    </p>

                    <p className='max-min-temp'>Maximum Temperature:
                        { parseFloat(main.temp_max - kelvin , 10).toFixed(2)}<span> &#x2103; </span>
                    </p>

                    <p className='max-min-temp'>Minimum Temperature:
                        { parseFloat(main.temp_min - kelvin , 10).toFixed(2)}<span> &#x2103; </span>
                    </p>
                </div>
            </div>
        );
}
 

Weather.propTypes = {
    response: PropTypes.object.isRequired
}
export default Weather;