import { useState, useEffect } from 'react';

import MealItem from './MealItem.jsx';
import useHttp from '../hooks/useHttp.js';
import Error from './Error.jsx';

const requestConfig = {};

export default function Meals() {
  // console.log("Backend URL:", process.env.REACT_APP_BACKEND);

   const url = `${import.meta.env.VITE_BACKEND_URL}/meals`;
  //const url = `http://192.168.72.147:8080/meals`;

  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp(url, requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }
  

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.mealid} meal={meal} />
      ))}
    </ul>
  );
}