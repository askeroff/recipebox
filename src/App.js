import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Grid, Button } from 'react-bootstrap';
import ModalWindow from './ModalWindow';
import ViewRecipes from './viewRecipes';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      storage: JSON.parse(localStorage.getItem('recipeBook'))
    }
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  changeStateForAdd() {
    this.setState({
      storage: JSON.parse(localStorage.getItem('recipeBook'))
    });
  }

  render() {
    return (
      <Grid>
        <h1> The Recipe Box </h1>

        <ViewRecipes storage={this.state.storage} updateState={this.changeStateForAdd.bind(this)} />

        <Button onClick={this.open.bind(this)} bsSize='large' bsStyle='success'>Add</Button>

        <ModalWindow 
        show={this.state.showModal}
        action='add'
        title='Add Recipe' 
        updateState={this.changeStateForAdd.bind(this)}
        close={this.close.bind(this)} 
        />
      </Grid>
    );
  }
}

export default App;
