import { combineReducers } from 'redux';

import groceryItems from './groceryItems';

const itemReducer = combineReducers({
  groceryItems
})

export default groceryItems
