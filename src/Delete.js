import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Delete extends Component {

  deleteElement() {
    if(!confirm('Are you sure to delete this item?')) {
      return false;
    } else {
      const stateFromStorage = JSON.parse(localStorage.getItem('recipeBook'));
      stateFromStorage.splice(this.props.element, 1);
      localStorage.setItem('recipeBook', JSON.stringify(stateFromStorage));
      this.props.updateState();
    }
  }

  render() {
    return (
      <Button 
      onClick={this.deleteElement.bind(this)}
      bsSize='sm' 
      bsStyle='danger' 
      type='button'>
        Delete
      </Button>
    );
  }
}

export default Delete;