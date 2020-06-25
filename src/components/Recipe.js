import React, { useState } from 'react';
import IngredientsDetail from './IngredientsDetail';

const Recipe = ({ propsRecipe }) => {
  /* REACT HOOKS — TOOGLE ELEMENT */
  const [show, setShow] = useState(false);

  /* PROPS FROM 'recipe' ARRAY
     REMEMBER: propsRecipe = 'hits' > 'recipe
  */
  const { label, image, url, ingredients } = propsRecipe.recipe;

  return (
    <div className="per-recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />

      <div className="button-style">
        {/* BUTTON: URL */}
        <button
          className="btn waves-effect waves-light margin-resize"
          type="submit"
          name="action"
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            URL
          </a>
        </button>

        {/* BUTTON: INGREDIENTS */}
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
          onClick={() => setShow(!show)}
        >
          Ingredients
        </button>
      </div>
      {show && <IngredientsDetail propsIngredients={ingredients} />}
    </div>
  );
};

export default Recipe;
