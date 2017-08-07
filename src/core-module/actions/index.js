export const getItems = () => {
  return {
    type: 'GET_ITEMS'
  }
}

export const getItem = (item) => {
  return {
    type: 'GET_ITEM',
    item
  }
}

export const deleteItem = (item) => {
  return {
    type: 'DELETE_ITEM',
    item
  }
}

export const showItemsList = () => {
  return{
    type: 'SHOW_ITEMS_LIST'
  }
}
