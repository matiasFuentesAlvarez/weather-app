import { Formik, Form, Field } from 'formik'
import { useState } from 'react'

import styled from 'styled-components'


const Card = styled.div`

  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center; 
  background: rgba( 42, 245, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );height: 350px;
  width: 350px;

  & img{
    height: 200px;
    width: 200px;
  }
  
  &.forecast img{
    height: 150px;
    width: 150px;
  }
  
  &.forecast{
    margin: 20px 25px 20px 25px;
    background: rgba( 172, 172, 222, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    height: 300px;
    width: 300px;
  }
  
  &.forecast p{
    font-size:20px;
    margin-top:5px;
    margin-bottom:5px;
    font-family: 'Roboto';
    
  }
  
  & p{
    font-size:25px;
    margin-top:5px;
    margin-bottom:5px;
    word-spacing:5px;
    text-shadow: 1px 2px 2px rgba(255,255,255,0.3);
    font-family: 'Roboto';
    color:#141204;
    text-shadow:0px 1px 3px rgba(0, 0, 0, 0.7);
  }
  
  &:hover{
    transform: scale(1.05,1.05);
    transition: 1s ease-in-out;
  }
  
  @media only screen and (max-width:1440px){
    height: 280px;
    width: 280px;
    
    & p{
      font-size:20px ;
    }
  
    &.forecast p{
    font-size:15px;
    }

    &.forecast{
      height: 240px;
      width: 240px;
    }
    
    & img{
      width: 160px;
      height: 160px;
    }
    
    &.forecast img{
      width: 120px;
      height: 120px;
    }
  }
  
  @media only screen and (max-width:1024px){
    height: 210px;
    width: 210px;
    & p{
      font-size:13px ;
    }
  
    &.forecast p{
    font-size:10px;
    }

    &.forecast{
      height: 180px;
      width: 180px;
      margin: 20px 15px 20px 15px;

    }
    
    & img{
      width: 120px;
      height: 120px;
    }
    
    &.forecast img{
      width: 90px;
      height: 90px;
    } 
  }
  
`

const ForecastContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  margin-top:10px;
  @media only screen and (max-width:768px){
    flex-flow: column wrap;
    align-content:center;
  }
  
`

const ActualContainer = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:center;
  margin-top:10px ;
`

const Tittle = styled.p`
  font-size:40px;
  margin-top:15px;
  margin-bottom:15px;
  color:#141204;
  font-family: 'Roboto';
  font-weight:900;
  text-shadow:0px 1px 3px rgba(255, 255, 255, 0.7);
  letter-spacing:5px;
  @media only screen and (max-width:768px){
    font-size:25px;
  }
`

const TittleContainer = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:center;
`

const NoSubmited = styled.div`
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content:center;
  & input{
    height: 100px;
    width: 900px;
    background: rgba( 42, 245, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 50px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
  }
  & input::placeholder{
    text-align: center;
    color:#141204;
    font-size:20px;
    word-spacing:5px;
    font-weight: 800;
  }
  & input:focus{
    outline:none;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.5 );
    background: rgba( 42, 245, 255, 0.25 );
    color:#141204;
    text-align:center;
    font-size:20px;
    font-weight: 800;
  }
  @media only screen and (max-width:1024px){
    & input{
      width: 600px;
    }
  }
  @media only screen and (max-width:768px){
    & input{
      width: 300px;
    }
  }
`

const Submited = styled.div`
  margin-top:30px ;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  color:#f4f2f3;
  text-align:center;
  font-size:20px;
  font-weight: 800;
  & input{
    height: 50px;
    width: 500px;
    background: rgba( 42, 245, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 50px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
  }
  & input::placeholder{
    text-align: center;
    color:#141204;
    font-size:20px;
    word-spacing:5px;
    font-weight: 800;
  }
  & input:focus{
    outline:none;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    background: rgba( 42, 245, 255, 0.25 );
    color:#141204;
    text-align:center;
    font-size:20px;
    font-weight: 800;
  }
  @media only screen and (max-width:525px){
    & input{
      width: 300px;
    }
  }
`

const Div = styled.div`
  height: 100%;
`


const filterWeather = (forecast, actual) => {
  let output = []
  if (Object.keys(forecast).length === 0) {
    return output
  }
  else {
    console.log(forecast)
    console.log(actual)

    let min = forecast.list.reduce((acc, el) => {
      let hour = el.dt_txt.slice(11, 19)
      if (hour.localeCompare('06:00:00') !== 0) {
        return acc
      }

      return acc.concat(el)
    }, [])
    let max = forecast.list.reduce((acc, el) => {
      let hour = el.dt_txt.slice(11, 19)
      if (hour.localeCompare('18:00:00') !== 0) {
        return acc
      }

      return acc.concat(el)
    }, [])
    for (let i = 0; i < min.length; i++) {
      let currentWeatherObject = {}
      let forecastWeatherObject = {}

      forecastWeatherObject['min'] = Math.round(min[i].main.temp - 273.15)
      forecastWeatherObject['max'] = Math.round(max[i].main.temp - 273.15)
      forecastWeatherObject['image'] = max[i].weather[0].icon
      forecastWeatherObject['date'] = min[i].dt_txt.slice(0, 10)

      currentWeatherObject['current'] = Math.round(actual.main.temp - 273.15)
      currentWeatherObject['image'] = max[i].weather[0].icon
      currentWeatherObject['feels_like'] = Math.round(actual.main.feels_like - 273.15)

      if (currentWeatherObject.current > Math.round(max[i].main.temp - 273.15)) {
        currentWeatherObject['max'] = currentWeatherObject.current
      }
      else {
        currentWeatherObject['max'] = Math.round(max[i].main.temp - 273.15)
      }

      if (currentWeatherObject.current < Math.round(min[i].main.temp - 273.15)) {
        currentWeatherObject['min'] = currentWeatherObject.current
      }
      else {
        currentWeatherObject['min'] = Math.round(min[i].main.temp - 273.15)
      }

      if (i === 0) {
        output.push(currentWeatherObject)
      }
      else {
        output.push(forecastWeatherObject)
      }
    }
    console.log(output)
    return output
  }
}

const App = () => {
  const [forecast, setForecast] = useState({})
  const [actual, setActual] = useState({})
  const [visibilityOfWeather, setVisibilityOfWeather] = useState(false)

  if (visibilityOfWeather) {
    let weather = filterWeather(forecast, actual)
    let today = weather[0]
    weather.shift()
    let otherDays = weather

    return (
      <Div>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={async values => {
            let city = values.search
            const forecast = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=6edc2a05cbcd95e762583867fc200b7a`)
            const actual = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6edc2a05cbcd95e762583867fc200b7a`)
            //http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6edc2a05cbcd95e762583867fc200b7a
            const forecastData = await forecast.json()
            const actualData = await actual.json()
            setForecast(forecastData)
            setActual(actualData)
            setVisibilityOfWeather(true)

          }}
        >
          <Submited>
            <Form>
              <Field name='search' placeholder='Enter city name' onSubmit={({ resetForm }) => {
                resetForm()
              }} />
            </Form>
          </Submited>
        </Formik>
        <TittleContainer>
          <Tittle>Today Weather</Tittle>
        </TittleContainer>
        <ActualContainer>
          <Card>
            <img src={`${today.image}.png`} alt='' />
            <p>{`Actual temperature: ${today.current}°`}</p>
            <p>{`Maximun temperature: ${today.max}°`}</p>
            <p>{`Minimun temperature: ${today.min}°`}</p>
            <p>{`Feels like: ${today.feels_like}°`}</p>
          </Card>
        </ActualContainer>
        <TittleContainer>
          <Tittle>Forecast</Tittle>
        </TittleContainer>
        <ForecastContainer>
          {otherDays.map(el =>
            <Card className='forecast'>
              <img src={`${el.image}.png`} alt=''></img>
              <p>{`Maximun temperature: ${el.max}°`}</p>
              <p>{`Minimun temperature: ${el.min}°`}</p>
              <p>{`Day: ${el.date}`}</p>
            </Card>
          )
          }

        </ForecastContainer>
      </Div >
    )
  }
  else {
    return (
      <Div>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={async values => {
            let city = values.search
            const forecast = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=6edc2a05cbcd95e762583867fc200b7a`)
            const actual = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6edc2a05cbcd95e762583867fc200b7a`)
            //http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6edc2a05cbcd95e762583867fc200b7a
            const forecastData = await forecast.json()
            const actualData = await actual.json()
            setForecast(forecastData)
            setActual(actualData)
            setVisibilityOfWeather(true)

          }}
        >
          <NoSubmited>
            <Form>
              <Field name='search' placeholder='Enter city name' />
            </Form>
          </NoSubmited>
        </Formik>
      </Div >
    )
  }
}
/*
f4f2f3
c0a9bd
94a7ae
64766a
*/
export default App;
