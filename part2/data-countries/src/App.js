import React, { useState, useEffect } from "react";
import axios from "axios";

// List
const ListView = ({ country }) => {
  const [detail, setDetail] = useState(false);

  if (detail) {
    return (
      <li className="line">
        <FullView country={country} />
        <button onClick={() => setDetail(!detail)}>Details</button>
      </li>
    );
  }

  return (
    <li className="line">
      {country.name}
      <button onClick={() => setDetail(!detail)}>Details</button>
    </li>
  );
};

// Detail view format
const FullView = ({ country }) => {
  // const [weather, setWeather] = useState();
  // Test Data
  const weather = {
    request: {
      type: "City",
      query: "New York, United States of America",
      language: "en",
      unit: "m",
    },
    location: {
      name: "New York",
      country: "United States of America",
      region: "New York",
      lat: "40.714",
      lon: "-74.006",
      timezone_id: "America/New_York",
      localtime: "2019-09-07 08:14",
      localtime_epoch: 1567844040,
      utc_offset: "-4.0",
    },
    current: {
      observation_time: "12:14 PM",
      temperature: 13,
      weather_code: 113,
      weather_icons: [
        "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
      ],
      weather_descriptions: ["Sunny"],
      wind_speed: 0,
      wind_degree: 349,
      wind_dir: "N",
      pressure: 1010,
      precip: 0,
      humidity: 90,
      cloudcover: 0,
      feelslike: 13,
      uv_index: 4,
      visibility: 16,
    },
  };

  // // fetch data from weather api
  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://api.weatherstack.com/current?access_key=YOUR-API-KEY&query=${country.name}`
  //     )
  //     .then((response) => {
  //       setWeather(response.data);
  //       console.log(response.data);
  //     });
  // }, [country]);

  return (
    <div>
      <h3>{country.name}</h3>
      <ul>
        <li>
          Capital: <span>{country.capital}</span>
        </li>
        <li>
          Population: <span>{country.population}</span>
        </li>
      </ul>
      <h4>Languages</h4>
      <ul>
        {country.languages.map((lang) => (
          <li>{lang.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt="flag" />
      <h4>Weather in {country.capital}</h4>
      <p>Temperature: {weather.current.temperature}</p>
      <img src={weather.current.weather_icons} alt="weather" />
      <p>
        Wind: {weather.current.wind_speed} mph, {weather.current.wind_dir}
      </p>
    </div>
  );
};

const App = () => {
  // setup hooks
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  // fetch data from countries api
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  // config event handler for the search input
  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  // function to call inside .filter method
  const filterCountries = (country) =>
    country.name.toLowerCase().includes(search);

  // check what to show
  const show = (countriesList) => {
    const searchResult = countriesList.filter(filterCountries);
    if (searchResult.length > 10) {
      return "Too many matches";
    }
    if (searchResult.length === 1) {
      return <FullView country={searchResult[0]} />;
    }
    return searchResult.map((country) => (
      <ListView key={country.alpha2Code} country={country} />
    ));
  };

  console.log(countries.filter(filterCountries));

  return (
    <div className="container">
      <form>
        <span>Find countries: </span>
        <input value={search} onChange={handleSearch} />
      </form>
      <ul>{show(countries)}</ul>
    </div>
  );
};

export default App;
