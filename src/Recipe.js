import React, { Component } from 'react';
import { Button, Collapse, Well, ButtonGroup } from 'react-bootstrap';
import ModalWindow from './ModalWindow';
import Delete from './Delete';

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <Button bsStyle='primary' className='recipe' onClick={ ()=> this.setState({ open: !this.state.open })}>
          {this.props.title}
        </Button>

        <Collapse in={this.state.open}>
          <div>
            <Well>
              <h1 className='text-center'>Ingredients</h1>
              <ul className='list-group'>
                {this.props.array.map((item, index) => {
                  return (
                    <li className='list-group-item' key={index}> 
                      {item}
                    </li>
                  );
                })}
              </ul>
              <ButtonGroup>
                <Button bsSize='sm' onClick={this.open.bind(this)} bsStyle='primary'>
                  Edit
                </Button>
                <Delete 
                  updateState={this.props.updateState}  
                  element={this.props.element} />
              </ButtonGroup>
            </Well>
          </div>
        </Collapse>

        <ModalWindow 
          show={this.state.showModal}
          action='edit'
          element={this.props.element}
          title='Edit Recipe' 
          close={this.close.bind(this)}
          updateState={this.props.updateState}  
        />

      </div>
    );
  }
}

export default Recipe;