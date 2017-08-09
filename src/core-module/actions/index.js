export const getItems = () => {
  return {
    type: 'GET_ITEMS'
  }
}

export const addItem= (item) => {
  return {
    type: 'ADD_ITEM',
    item
  }
}

export const deleteItem = (item) => {
  return {
    type: 'DELETE_ITEM',
    item
  }
}

export const updateItem = (item) => {
  return{
    type: 'UPDATE_ITEM',
    item
  }
}
