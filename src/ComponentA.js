import React, { useState } from 'react';
import ComponentB from './components/ComponentB';
import {LoginContext} from './context/Context';

const ComponentA = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <LoginContext.Provider value={{loggedIn, setLoggedIn}}>
      <ComponentB />
    </LoginContext.Provider>
  )
}

export default ComponentA
