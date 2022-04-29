import React, { useState } from 'react';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import ComponentD from './components/ComponentD';
import {LoginContext} from './context/Context';

const ComponentA = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <LoginContext.Provider value={{loggedIn, setLoggedIn}}>
      <ComponentB />
      <ComponentC />
      <ComponentD />
    </LoginContext.Provider>
  )
}

export default ComponentA
