import './App.css';
import TodoList from './components/TodoList';
import {ThemeProvider} from "styled-components"
import Moon from "./icon-moon.svg"
import Sun from "./icon-sun.svg"
import {lightTheme,darkTheme,GlobalStyles} from "./themes.js"
import React, { useState,useEffect} from 'react';
const api = {
  key: "341e8c0e470206bb418741b5c5182651",
  base: "//api.openweathermap.org/data/2.5/"
}




    // const fetchData = async () => {
    //     fetch("http://127.0.0.1:5000/tasks",{
    //         method: "GET",
    //     }).then((response) => response.json())
    //     .then((data) => console.log(data));

function App() {
  const [theme,setTheme] = useState("dark");
  const [icon,setIcon] = useState(Moon)
  const [weather,setWeather] = useState('')
  localStorage.setItem("theme", JSON.stringify(theme))

  useEffect(async () => {
    fetch(`${api.base}weather?q=Tel-aviv&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then((data) => {
      setWeather(data)
      console.log(weather)
    })
  }, [])
  
  const themeToggle = () => {
    localStorage.getItem("theme").match("light") ? setTheme("dark") : setTheme ("light")
    localStorage.getItem("theme").match("light") ? setIcon(Moon) : setIcon (Sun)
    localStorage.setItem("theme", JSON.stringify(theme))
  }


  return (
    <ThemeProvider theme={ theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
        <div className="App">
          <header className="App-header">
            <p className='title'> TODO APP </p>
            <p> {weather.weather[0].main}
            <img src={"http://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png"}/></p>
              <img src={icon} className="switch" onClick={() => themeToggle()} ></img>
          </header>
          <body className='App-body'>
            <TodoList/>
          </body>
        </div>
    </ThemeProvider>
  );
}

export default App;
