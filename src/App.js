
import React from "react";

import "./App.css"

import PropCointainer from "./components/PropCointainer";
import Navbar from "./components/Navbar";
import QuoteCardList from "./components/QuoteCardList";
import Educationplanner from "./Educationplanner.js";
import Bankofreact from "./components/Bankofreact.js";
import PasswordGenerator from "./components/PasswordGenerator.js";
import RestaurantCardList from "./components/RestaurantCardList.js";
import Progressbar from "./components/Progressbar.js";
import Hotel from "./components/Hotel.js";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Banner from "./workout/Banner.js";
import Exercise from "./workout/Excercise.js";
import ExerciseCard from "./workout/ExerciseCard.js";
import App1 from "./budgetplanner/App1.js";
import TextUtil from "./textutils/TextUtil.js";
import TodoApp from "./todolist/TodoApp.js";
import Crudapp from "./crud/Crudapp.js";
import Movieapp from "./MovieApp/Movieapp.js";
import Foodapp from "./FoodappMCT/Foodapp.js";



function App() {
  
  return (
    <div >
       <Foodapp/>
  
  </div>
  )
}

export default App;
