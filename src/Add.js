import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Add extends Component {

  addToStorage() {
    const stateFromStorage = JSON.parse(localStorage.getItem('recipeBook'));
    const newRecipe = {
      title: this.props.title,
      ingredients: this.props.ingredientsList.split(',')
    }
    stateFromStorage.push(newRecipe);
    localStorage.setItem('recipeBook', JSON.stringify(stateFromStorage));
    this.props.updateState();
    this.props.close();
  }

  render() {
    return (
      <Button onClick={this.addToStorage.bind(this)} bsStyle='primary' type='button'>
        Submit
      </Button>
    );
  }
}

export default Add;