import React from "react";
import Loading from "./Loading";


function Home() {
  document.title = 'Home';

    return (
      <div className=' '>
        {/* Food menu details */}
        <div className="mx-auto p-10 
          sm:grid sm:grid-cols-2 lg:grid-cols-3 max-w-screen-xl gap-x-4 gap-y-6 items-center justify-center"
        >
          <h1 className="text-xl text-gray-600">Welcome to Eatbit</h1>
          <Loading/>
          <hr/>
          
        </div>

       
     
      </div>
  );
}

export default Home;