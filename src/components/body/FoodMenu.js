import DISHES from '../../data/dishes';
import FoodMenuItem from './FoodMenuItem';
import React, { Component } from "react";
import DishDetail from './DishDetail';

export default class FoodMenu extends Component {

  state = {
    dishes: DISHES,
    selectedDish: null,
  }

  onDishSelect = dish => {
    this.setState({ selectedDish: dish });
  }


  render() {
      const menu = this.state.dishes.map(item => {
      return <FoodMenuItem 
                key={item.id} 
                dish={item} 
                dishSelect={() => this.onDishSelect(item)}  
              />
    }); 

    let dishDetail = null;
    if(this.state.selectedDish != null) {
      dishDetail = <DishDetail dish={this.state.selectedDish} />
    }

    return (
      <>
        {/* Food menu details */}
        <div className='mx-auto my-5 sm:flex max-w-screen-xl '>
          <div 
            className='w-full sm:w-1/2 flex flex-col px-10 '
          >
            {menu}
          </div>

          <div 
            className='w-1/2 sm:flex mx-auto px-10'
          >
            {dishDetail} 
          </div>
          
        </div>
        {/* end food menu */}
      </>
  );}
}


