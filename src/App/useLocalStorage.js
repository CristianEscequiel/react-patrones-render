import React from "react";

function useLocalStorage(itemName,
  initialValue) {
     console.log( itemName ,  initialValue)
  const [state, dispatch] = React.useReducer(reducer, inicialState({ initialValue }));

  const {
    item,
    loading,
    error,
    sincronizeItem,
  } = state;

  //ACTION CREATORS

  const onError = (error) => { dispatch({ type: actionTypes.error, payload: error }) }

  const onSuccess = (item) => { dispatch({ type: actionTypes.success, payload: item }) }

  const onSave = (item) => { dispatch({ type: actionTypes.save, payload: item }) }

  const onSincronize = () => { dispatch({ type: actionTypes.sincronize }) }

  console.log(item)

  React.useEffect(() => {
    setTimeout(() => {
      console.log('dsadasdasd', itemName ,  initialValue)
      try {

        console.log( itemName ,  initialValue)
        const localStorageItem = localStorage.getItem
          (itemName)
        console.log( 'local storage' ,localStorageItem)
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify
            (initialValue))
          parsedItem = initialValue;
          console.log(parsedItem)
        } else {
          parsedItem = JSON.parse
            (localStorageItem)

        }
        onSuccess(parsedItem)

      } catch (error) {
        onError(error);
      }
    }, 2000)
  }, [sincronizeItem]);

  const saveItem = (newItem) => {
    try {
      const stringfiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringfiedItem)
      onSave(newItem)
    } catch (error) {
      onError(error)
    }
  };

  const sincronizeItems = () => {
    onSincronize()
  }

  return {
    item,
    saveItem,
    error,
    loading,
    sincronizeItems
  };
}

const inicialState = ({ initialValue }) => ({
  loading: true,
  error: false,
  sincronizeItem: true,
  item: initialValue,
})

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE'
}

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    sincronizeItem: true,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    loading: true,
    sincronizeItem: false
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
}

export { useLocalStorage }