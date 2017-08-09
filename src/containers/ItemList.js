import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getItems,
  addItem,
  deleteItem,
  updateItem
} from '../core-module/actions';

import App from '../components/App';

const mapStateToProps = (state) => {
  let items = state.items;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getItems,
    addItem,
    deleteItem,
    updateItem
  })
}





export default connect(mapStateToProps, mapDispatchToProps);
