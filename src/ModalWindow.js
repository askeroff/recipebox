import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Form from './Form';

class ModalWindow extends Component {

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form 
            updateState={this.props.updateState}  
            close={this.props.close} 
            action={this.props.action} 
            element={this.props.element} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.close}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

export default ModalWindow;
