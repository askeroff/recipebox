import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Edit extends Component {

  editStorage() {
    const stateFromStorage = JSON.parse(localStorage.getItem('recipeBook'));
    const newRecipe = {
      title: this.props.title,
      ingredients: this.props.ingredientsList.split(',')
    }
    stateFromStorage[this.props.element] = newRecipe;
    localStorage.setItem('recipeBook', JSON.stringify(stateFromStorage));
    this.props.updateState();
    this.props.close();
  }

  render() {
    return (
      <Button onClick={this.editStorage.bind(this)} bsStyle='primary' type='button'>
        Edit
      </Button>
    );
  }
}

export default Edit;