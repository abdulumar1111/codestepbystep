import React from 'react';
import {Text, View} from 'react-native';
import Home from './src/component/Home/home';
import About from './src/component/About/about';
import Contact from './src/component/Contact/contact';

const App = () => {
  return (
    <>
      <Home />
      <About />
      <Contact />
    </>
  );
};

export default App;
