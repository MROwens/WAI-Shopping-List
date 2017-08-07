import React, { Component } from 'react';


class Form extends Component {
  render() {
    return (
      <div className="Form">
        <form action=''>
          <label>
            List Item: 
            <input type='text' className='listItem' />
          </label>
          <button type='submit'>Add to List</button>
        </form>
      </div>
    );
  }
}

export default Form;
