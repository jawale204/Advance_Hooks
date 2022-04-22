import { useState } from "react";
function useLocalStorage(key, initialValue) {
  const getLocalStorageValue = (key, initialValue) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  };
  const [localStorageValue, setLocalStorageValue] = useState(
    getLocalStorageValue(key, initialValue)
  );

  const setValue = (value) => {
    setLocalStorageValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [localStorageValue, setValue];
}

export default useLocalStorage;
