import React, { Component } from 'react';
import Recipe from './Recipe';

class ViewRecipes extends Component {
  render() {
    const list = this.props.storage.map((item, index) => {
      return (
        <div key={index}>
          <Recipe 
          updateState={this.props.updateState}  
          element={index} 
          title={item.title} 
          array={item.ingredients} />
        </div>);
    });

    return <div className='well'> {list} </div> ;
  }
}

export default ViewRecipes;
