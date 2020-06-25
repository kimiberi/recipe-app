import React, { useState } from 'react';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './App.scss';

import Recipe from './components/Recipe';
import Alert from './components/Alert';

function App() {
  /* REACT HOOKS */
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  /* REACT HOOKS — ALERT DISPLAY */
  const [alert, setAlert] = useState('');

  const APP_ID = '214eaa94';
  const APP_KEY = 'a98bbd900f15abf1982ca922fb79ab3d';
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  /* (3) AXIOS.GET | GET ALL RECIPE API DATA*/
  const getData = async () => {
    /* CONDITIONAL STATEMENT FOR ALERT MESSAGE */
    if (query !== '') {
      const result = await Axios.get(url);

      /* IF DATA NOT EXIST */
      if (!result.data.more) {
        return setAlert('No food with such name');
      }
      /* SET METHOD TO HANDLE 'hits' ARRAY FROM RECIPE API */
      setRecipes(result.data.hits);

      /* SET METHOD TO CLEAR ALERT | INPUT FIELD AFTER BUTTON CLICKED */
      setAlert('');
      setQuery('');

      console.log(result);
    } else {
      setAlert('Please Fill the Form');
    }
  };

  /* (2) AXIOS.GET | GET RECIPE DATA UPON CLICKING BUTTON */
  const handleSubmit = (event) => {
    event.preventDefault();
    getData();
  };

  /* (1) FIELD SEARCH — GET DATA FROM INPUTFIELD [onChange] && SEARCH THE CORRECT DATA USING 'setQuery()' > '${query}' */
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <h1>Recipe Search App</h1>
      {alert !== '' && <Alert propsAlert={alert} />}
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="input-field col s12 margin-resize">
          <input
            type="text"
            name="search"
            onChange={handleChange}
            value={query}
            id="autocomplete-input"
            className="autocomplete"
          />
          <label htmlFor="autocomplete-input">Search Recipe..</label>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Search
        </button>
      </form>

      {/* SINCE 'setRecipes()' DIRECTLY GOES TO 'hits' ARRAY, WE CAN CALL THE NEXT PROPERTIES INSIDE 'hits' */}
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((item) => <Recipe key={uuidv4()} propsRecipe={item} />)}
      </div>

      <br />
      {/* COPYRIGHT */}
      <div className="copyright">
        <p>Copyright 2020 © kimiberi</p>
      </div>
    </div>
  );
}

export default App;
