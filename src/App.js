import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';


function App() {

  const [ search, saveSearch ] = useState({
    country: '',
    city: ''
  });

  const{ country, city } = search;

  const [ request, setRequest ] = useState(false);

  const [ response, setResponse ] = useState({});

  const [ error, setError ] = useState(false);

  useEffect(() => {
    const apiRequest = async () => {
      if (request) {
        const appIDSecret = process.env.REACT_APP_WEATHER_API_KEY;

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appIDSecret}`
  
        const request = await fetch(url);
        const response = await request.json();
  
        setResponse(response);
        setRequest(false);

        if (response.cod === '404') {
          setError(true);
        } else {
          setError(false);
        }
      }
    }

    apiRequest();

    //eslint-disable-next-line
  }, [request]); 

  let component;

  if (error) {
    component = <Error message='No results matching your search'/>
  } else {
    component =  <Weather
                    response={response}
                  />
  }

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
              { component }
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
