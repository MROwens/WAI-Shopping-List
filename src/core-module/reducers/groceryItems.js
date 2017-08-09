
const groceryItems = (state = [],action) => {
  switch(action.type){
    case 'GET_ITEMS':
    return Object.assign({}, state, {

    })

    case 'GET_ITEMS':
    return Object.assign({}, state, {
      state
    })
    default:
      return state
  }
}

export default groceryItems;
