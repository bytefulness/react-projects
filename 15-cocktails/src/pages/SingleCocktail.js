import React, { useState, useEffect, useCallback } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState(null);

  const { id } = useParams();

  const getCocktail = useCallback(async () => {
    try {
      const response = await fetch(`${url}${id}`);
      if (!response.ok) {
        throw new Error("Just happend unexpected error originate from the API");
      }
      const data = await response.json();

      if (!data.drinks) setCocktail(null);
      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = data.drinks[0];

      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];

      const newCocktail = {
        name,
        image,
        info,
        category,
        glass,
        instructions,
        ingredients,
      };

      setCocktail(newCocktail);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getCocktail();
  }, [id, getCocktail]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2 className="section-title">No cocktail to display</h2>;
  }

  const {
    name,
    image,
    category,
    info,
    glass,
    instructions,
    ingredients,
  } = cocktail;

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>
      <h2 className="section-title">{name}</h2>

      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">Category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">Info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">Glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">Instructions:</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">Ingredients:</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : "";
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
