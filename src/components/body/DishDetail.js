
function DishDetail({dish}) {
  return <>
    <div className="bg-white h-min rounded-sm shadow-md my-5 p-10">
        <img className="max-h-80 w-full aspect-auto rounded-sm" src={dish.image}/>
        <div className="mt-5">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{dish.name}</h1>
            <h2 className="text-3xl text-gray-900 my-3">Price: {dish.price}</h2>
        </div>
        
        <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{dish.description}</p>
              </div>
        </div>

    </div>
  </>;
}

export default DishDetail;
