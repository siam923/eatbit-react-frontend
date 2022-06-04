import { Fragment } from 'react'
import FoodMenu from './FoodMenu';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function Body() {
  return <div>
    <FoodMenu/>
                  
  </div>;
}

export default Body;
