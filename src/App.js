import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { Products } from './components/Products';
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts';
import { NoMatches } from './components/NoMatches';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Profile } from './components/Profile';

// function Person(props) {
//   return (
//     <>
//       <h1>Name: {props.name != null ? props.name : 'Dev'} </h1>
//       <h2>Age: {props.age != null ? props.age : 20} </h2>
//     </>
//   )
// }
const App = () => {

  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   setCounter(100);
  // }, [])

  return (
    // <div className="App">
    //   {/* <>
    //     <Person name={'Dev Pithadia'} age={20} />
    //     <Person />
    //   </> */}

    //   <button onClick={() => { setCounter((prevCount) => prevCount - 1) }}>-</button>
    //   <h1>{counter}</h1>
    //   <button onClick={() => { setCounter((prevCount) => prevCount + 1) }} >+</button>
    // </div>
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='about' element={<About />} ></Route>
        <Route path='order-summary' element={<OrderSummary />}></Route>
        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />}></Route>
          <Route path='new' element={<NewProducts />}></Route>
        </Route>
        <Route path='users' element={<Users />}>
          <Route path=':userId' element={<UserDetails />}></Route>
        </Route>
        <Route path='*' element={<NoMatches />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;
