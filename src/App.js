import './App.css';

import Movie from "./components/Movie";

import KungFu from "./images/kungfupanda.png"

function App() {
  const movies = [{
    "name": "Kung Fu Panda",
    "review": "10",
    "image": KungFu,
    "overview": "Po might just be the laziest, clumsiest panda in the Valley of Peace..."},
    {
      "name": "The Conjuring",
      "review": "7",
      "image": KungFu,
      "overview": "Po might just be the laziest, clumsiest panda in the Valley of Peace..."},
    {
    }, 
    {
      "name": "Barbie",
      "review": "8",
      "image": KungFu,
    "overview": "Po might just be the laziest, clumsiest panda in the Valley of Peace..."},
    {
    },
    {
      "name": "The Hangover 2",
      "review": "3",
      "image": KungFu,
    "overview": "Po might just be the laziest, clumsiest panda in the Valley of Peace..."},
    {
    },
    {
      "name": "Get Out",
      "review": "8.5",
      "image": KungFu,
    "overview": "Po might just be the laziest, clumsiest panda in the Valley of Peace..."},
    {
    },
  {
      "name": "Despicable Me",
      "review": "6",
      "image": KungFu,
    "overview": "Po might just be the laziest, clumsiest panda in the Valley of Peace..."},
    {
    },
  {
      "name": "Shrek",
      "review": "10",
      "image": KungFu,
    "overview": "Po might just be the laziest, clumsiest panda in the Valley of Peace..."},
    {
    }]
  return (
    <div className="App">
      <div className="header"> 
        <h1> MOVIES </h1>
        <h1> Popular </h1>
        <h1> Recent </h1>
        <h1> Free </h1>
        <h1> Genres </h1>
      </div>
      <div className="body">
        {movies.map(movie => 
          <Movie name={movie.name} review={movie.review} image={movie.image}/>
        )}
      </div>
    </div>
  );
}

export default App;
