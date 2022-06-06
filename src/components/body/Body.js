import FoodMenu from './FoodMenu';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import {Route, Routes, Navigate} from 'react-router-dom';
import Registration from './Registration';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function Body() {
  return <>
      <Routes classNames="h-screen">
        <Route path='/' exact element={<Home/>}/>
        <Route path='/menu' exact element={<FoodMenu/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/reg' exact element={<Registration/>}/>
        {/* <Route path="/" element={<Navigate to="/menu" />} /> */}
      </Routes>
          
  </>;
}

export default Body;
