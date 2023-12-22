import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  
  // Add Recipe Function
  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  }

  //Delete Recipe Function
  const deleteRecipe = (index) => {
    const updatedRecipe = [...recipes];
    updatedRecipe.splice(index,1);
    setRecipes(updatedRecipe);
  }
  
  //Calls RecipeList and RecipeCreate and passes values to their respective components
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
