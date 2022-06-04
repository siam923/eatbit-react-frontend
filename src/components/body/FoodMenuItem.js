import React from "react";

function FoodMenuItem({dish, dishSelect}) {

  return (
    <div 
      className="w-sm max-h-50 h-50 my-5  bg-white rounded-lg shadow-md"
      onClick = {dishSelect}
    >
      <div className="relative cursor-pointer">
     
        <img className="object-cover opacity-60 aspect-video w-full overflow-hidden rounded-t-lg" src={dish.image} alt="product image" />
        <h4 className="absolute font-bold top-0 left-0 px-5 pt-5 text-xl tracking-tight text-grey-500">{dish.name}</h4>
      </div>
      
    </div>
  );
}

export default FoodMenuItem;
