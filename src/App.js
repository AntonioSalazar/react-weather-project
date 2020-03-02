import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';



function App() {

  const [ search, saveSearch ] = useState({
    country: '',
    city: ''
  });

  const{ country, city } = search;

  const [ request, setRequest ] = useState(false);

  useEffect(() => {
    const apiRequest = async () => {
      if (request) {
        const appIDSecret = process.env.REACT_APP_WEATHER_API_KEY;

        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appIDSecret}`
  
        const request = await fetch(url);
        const response = await request.json();
  
        console.log(response);
      }
    }

    apiRequest();
  }, [request]); 

  return (
    <Fragment>
      <Header 
        title="Weather Forecast"
      />
      <div className='form-container'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Form
                search={search}
                saveSearch={saveSearch}
                setRequest={setRequest}
              />
            </div>
            <div className='col m6 s12'>
              2
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
