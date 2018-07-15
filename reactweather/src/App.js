import React, { Component } from 'react';
// import './App.css';
import Topheader from './components/Topheader/Topheader';
import Form from './components/Form';
import Weather from './components/Weather';


class App extends Component {

async componentDidMount(){
  console.log("MOUNTED")
}
getWeather =  async (e)=>{ 
        
    e.preventDefault();
    const api_key = "gYKvBB0KdGA3YlavbAuaenogPATVUAl6";
    console.log("trying to get weather!")
  const api_call = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${api_key}`)
  const data = await api_call.json();
  console.log (data);
}

  render() {
    return (
      <div>
        <Topheader />
        <Form getWeather={this.getWeather} />
        <Weather />
        <button onClick={this.test}>TEST</button>
      </div>
    );
  }
}

export default App;
