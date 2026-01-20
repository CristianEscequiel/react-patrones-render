import React from "react";

function useLocalStorage(itemName,
  initialValue) {
  const [item, setItem] = React.useState
    (initialValue);
  const [loading, setLoading] = React.useState
    (true);
  const [error, setError] = React.useState
    (false);
  const [sincronizeItem, setSincronizedItem] = React.useState
    (true);

  React.useEffect(() => {
    setTimeout(() => {
      try {
      const localStorageItem = localStorage.getItem
        (itemName)
      let parsedItem;
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify
        (initialValue))
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse
        (localStorageItem)
        setItem(parsedItem)
      }
      setLoading(false)
    } catch(error) {
      setLoading(false)
      setError(true)
      setSincronizedItem(true)
    }
    } , 2000)
  } , [sincronizeItem]);
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON
      .stringify(newItem))
    setItem(newItem)
  };

  const sincronizeItems = () => {
    setLoading(true);
    setSincronizedItem(false)
  }

  return {
    item,
    saveItem,
    error,
    loading,
    sincronizeItems
  };
}

export { useLocalStorage }