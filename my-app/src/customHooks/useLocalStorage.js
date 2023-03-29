import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {

  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
      return JSON.parse(storedValue);
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });
  
    const removeTodo = (id) => {
    setValue((prevValue) =>
      prevValue.filter((todo) => todo.id !== id)
    );
  };


  /*useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
      setValue(JSON.parse(storedValue));
    }
  }, [key]);*/

   useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue, removeTodo];
};