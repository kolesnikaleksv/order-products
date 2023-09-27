import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Orders from '../Orders/Orders';
import Groups from '../Groups/Groups';
import Product from '../Product/Product';
import Users from '../Users/Users';
import Settings from '../Settings/Settings';

const Routing = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);

  const [transitionStage, setTransistionStage] = useState("fadeIn");
  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div
      className={`${transitionStage} app__pages`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
      >
      <Routes location={displayLocation}>
        <Route path="/" element={<Orders/>} />
        <Route path="/groups" element={<Groups/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/sets' element={<Settings/>} />
      </Routes>
    </div>
  )
}

export default Routing;