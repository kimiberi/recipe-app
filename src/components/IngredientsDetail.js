import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const IngredientsDetail = ({ propsIngredients }) => {
  return (
    <div>
      {propsIngredients.map((ingredient) => (
        <div key={uuidv4()} className="ingredient-box">
          <ul>
            <li>{ingredient.text}</li>
            <li>
              <span className="otherColor">weight:</span> {ingredient.weight}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default IngredientsDetail;
