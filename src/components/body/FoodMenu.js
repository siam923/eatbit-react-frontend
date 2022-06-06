import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import DishDetail from './DishDetail';
import FoodMenuItem from './FoodMenuItem';
import { Dialog } from '@headlessui/react';
import { selectAlldishes } from "../../features/dish/dishSlice";


function FoodMenu() {
  document.title = 'FoodMenu';
  const dishes = useSelector((state) => selectAlldishes(state.dish))
  const comments = useSelector((state) => state.comment.comments)
  const [selectedDish, setSelectedDish] = useState(null)
  const [isOpen, setIsOpen ] = useState(false)
  
  
  const onDishSelect = dish => {
    setSelectedDish(dish)
    setIsOpen(true)
    console.log(isOpen, selectedDish)
  }

  const closeModal = () => {
    setSelectedDish(null)
    setIsOpen(false)
  }

  const menu = dishes.map(item => {
    return <FoodMenuItem 
            key={item.id} 
            dish={item} 
            dishSelect={() => onDishSelect(item)}
          />
    }); 

    let dishDetail = null;

    if(selectedDish != null) {
      const selectedComments = comments.filter(comment => {
        return comment.dishId === selectedDish.id;
      })
      dishDetail = <DishDetail dish={selectedDish} comments={selectedComments}/>
    }

    return (
      <div className=' '>
        {/* Food menu details */}
        <div className="mx-auto p-10 
          sm:grid sm:grid-cols-2 lg:grid-cols-3 max-w-screen-xl gap-x-4 gap-y-6 items-center justify-center"
        >
          {menu}
        </div>

        {/* food details overlay modal */}
        <Dialog open={isOpen} as="div" className="relative z-10" onClose={closeModal}>
            
            {/* makes background color black with opacity 25 */}
            <div className="fixed inset-0 bg-black bg-opacity-25" />

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    {dishDetail}

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md  border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </Dialog.Panel>
            
              </div>
            </div>
          </Dialog>
          
     
      </div>
  );
}

export default FoodMenu