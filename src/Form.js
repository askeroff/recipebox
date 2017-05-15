import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Add from './Add';
import Edit from './Edit';

class Form extends Component {

  constructor(props) {
    super(props);
    const stateFromStorage = JSON.parse(localStorage.getItem('recipeBook'));

    let recipe = '';
    let ingr = '';

    if(this.props.action === 'edit') {
       recipe = stateFromStorage[this.props.element].title;
       ingr = stateFromStorage[this.props.element].ingredients.join(', ');
    }

    this.state = {
      recipeName: recipe,
      ingredients: ingr,
      changed: false
    }
  }

  handleRecipeName(e) {
    this.setState({ recipeName: e.target.value });
  }

  handleIngredients(e) {
    this.setState({ ingredients: e.target.value });
  }

  editOrAdd(){
    if(this.props.action === 'edit') {
      return <Edit 
      element={this.props.element} 
      title={this.state.recipeName} 
      close={this.props.close} 
      changed={this.state.changed}
      updateState={this.props.updateState}   
      ingredientsList={this.state.ingredients} />
    } else if(this.props.action === 'add'){
      return <Add 
      close={this.props.close} 
      title={this.state.recipeName} 
      updateState={this.props.updateState}  
      ingredientsList={this.state.ingredients} />
    }
  }

  render() {
    return (
     <form>
       <FormGroup controlId='recipeName'>
         <ControlLabel>Recipe Name</ControlLabel>
         <FormControl
            type='text'
            value={this.state.recipeName}
            placeholder='Enter text'
            onChange={this.handleRecipeName.bind(this)}
          />
      </FormGroup>
      <FormGroup controlId='ingredients'>
        <ControlLabel>Ingredients</ControlLabel>
         <FormControl
            type='text'
            value={this.state.ingredients}
            placeholder='Enter ingredients separated by a comma'
            onChange={this.handleIngredients.bind(this)}
          />
        </FormGroup>

        {this.editOrAdd()}

     </form>
    );
  }
}

export default Form;